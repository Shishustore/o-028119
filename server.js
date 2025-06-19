const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// --- CONFIGURATION ---
const config = {
    sslcommerz: {
        store_id: process.env.SSLCOMMERZ_STORE_ID,
        store_password: process.env.SSLCOMMERZ_STORE_PASSWORD,
        api_url: 'https://securepay.sslcommerz.com/gwprocess/v4/api.php',
    },
    frontend_url: process.env.FRONTEND_URL || 'https://www.shishu.shop',
};

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// --- Serve Frontend Static Files ---
app.use(express.static(path.join(__dirname, 'dist')));

// --- API ROUTES ---
app.get('/api/products', async (req, res) => {
    try {
        const productsData = await fs.readFile(path.join(__dirname, 'src/data/products.json'));
        res.json(JSON.parse(productsData));
    } catch (error) {
        res.status(500).json({ message: "Could not load products." });
    }
});

// --- PAYMENT GATEWAY ---
app.post('/api/create-payment-session', async (req, res) => {
    const { orderDetails } = req.body;
    const { total, customerName, email, phone, items } = orderDetails;
    const transactionId = `SHISHU-${Date.now()}`;
    const paymentData = {
        store_id: config.sslcommerz.store_id,
        store_passwd: config.sslcommerz.store_password,
        total_amount: total,
        currency: 'BDT',
        tran_id: transactionId,
        success_url: `${config.frontend_url}/payment/success`,
        fail_url: `${config.frontend_url}/payment/fail`,
        cancel_url: `${config.frontend_url}/payment/cancel`,
        cus_name: customerName,
        cus_email: email,
        cus_phone: phone,
        product_name: items.map(item => item.name).join(', '),
        product_category: 'Clothing',
        product_profile: 'general',
        shipping_method: 'Courier',
    };
    try {
        const response = await axios.post(config.sslcommerz.api_url, paymentData, { 
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
        });
        if (response.data.status === 'SUCCESS') {
            res.json({ redirectUrl: response.data.GatewayPageURL });
        } else {
            throw new Error(response.data.failedreason || 'Failed to get redirect URL');
        }
    } catch (error) {
        console.error('SSLCommerz Error:', error.message);
        res.status(500).json({ error: 'SSLCommerz session creation failed.' });
    }
});

// --- Catch-all to serve the frontend ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
