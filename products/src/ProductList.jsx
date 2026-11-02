import React from "react";
import { useDispatch } from "react-redux";
import { createAction } from "@reduxjs/toolkit";

// The shell's cart slice listens for this exact type string.
export const addItem = createAction("cart/addItem");

const products = [
  { id: 1, name: "Keyboard", price: 40 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Monitor", price: 180 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Products (remote app)</h2>
      {products.map((p) => (
        <div key={p.id} className="row">
          <span>{p.name} - ${p.price}</span>
          <button className="btn" onClick={() => dispatch(addItem(p))}>
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
}