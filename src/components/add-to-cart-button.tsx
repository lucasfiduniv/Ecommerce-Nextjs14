"use client";
import { useCart } from "@/contexts/cart-context";

export interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleAddProductToCart}
        className="mt-08 flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 text-white font p-2"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
