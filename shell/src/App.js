import React, { Suspense } from "react";
import { useSelector } from "react-redux";

// Loaded at runtime from the products app
const ProductList = React.lazy(() => import("products/ProductList"));

export default function App() {
  const count = useSelector((state) => state.cart.items.length);

  return (
    <div>
      <header className="topbar">Shell app - Cart items: {count}</header>
      <Suspense fallback={<p className="card">Loading products...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}