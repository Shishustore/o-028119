import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';

describe('CartContext', () => {
  it('adds items and increments quantity', () => {
    const wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: 'Item', price: '৳100', image: 'img.png' });
    });

    act(() => {
      result.current.addToCart({ id: 1, name: 'Item', price: '৳100', image: 'img.png' });
    });

    expect(result.current.cartItems).toEqual([
      { id: 1, name: 'Item', price: '৳100', image: 'img.png', quantity: 2 }
    ]);
  });
});
