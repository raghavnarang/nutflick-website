import { TrashIcon } from "@heroicons/react/outline";
import { CartLine, CartLines } from "@shopify/hydrogen";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Cart.module.css";

const Cart: NextPage = () => {
  return (
    <Layout title="Nutflick" description="Best Dry Fruits in India">
      <div
        className={styles.cartContainer}
        role="table"
        aria-label="Shopping cart"
      >
        <h1 className={styles.pageTitle}>Cart</h1>
        <CartLines>
          {({ merchandise }) => (
            <div role="row" className={styles.cartLine}>
              <div role="cell" className={styles.imageWrapper}>
                <Link href={`product/${merchandise.product.handle}`}>
                  <a>
                    <CartLine.Image
                      options={{ width: 98, height: 98, crop: "center" }}
                    />
                  </a>
                </Link>
              </div>
              <div role="cell" className={styles.lineInfo}>
                <Link href={`products/${merchandise.product.handle}`}>
                  <a>
                    <CartLine.ProductTitle className={styles.productTitle} />
                  </a>
                </Link>
                <CartLine.SelectedOptions
                  as="ul"
                  className={styles.selectedOptions}
                >
                  {({ name, value }: { name: string; value: string }) => (
                    <>
                      {name}: {value}
                    </>
                  )}
                </CartLine.SelectedOptions>
                <CartLine.Attributes as="ul" className={styles.attributes}>
                  {({ key, value }: { key: string; value: string }) => (
                    <>
                      {key}: {value}
                    </>
                  )}
                </CartLine.Attributes>
                <CartItemQuantity />
              </div>
              <div role="cell" className={styles.priceActions}>
                <CartLine.Price className={styles.price} />
                <CartLine.QuantityAdjustButton
                  adjust="remove"
                  aria-label="Remove from cart"
                  className={styles.removeButton}
                >
                  <TrashIcon className={styles.removeButtonIcon} />
                </CartLine.QuantityAdjustButton>
              </div>
            </div>
          )}
        </CartLines>
      </div>
    </Layout>
  );
};

function CartItemQuantity() {
  return (
    <div className="flex border rounded border-gray-300 items-center overflow-auto mt-2">
      <CartLine.QuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
        className="p-2 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLine.QuantityAdjustButton>
      <CartLine.Quantity
        as="div"
        className="p-2 text-gray-900 text-xs text-center"
      />
      <CartLine.QuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLine.QuantityAdjustButton>
    </div>
  );
}

export default Cart;
