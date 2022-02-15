import { CartLine, CartLines } from "@shopify/hydrogen";
import { NextPage } from "next";
import Link from "next/link";

const Cart: NextPage = () => {
  return (
    <div className="px-7 flex-grow" role="table" aria-label="Shopping cart">
      <div role="row" className="sr-only">
        <div role="columnheader">Product image</div>
        <div role="columnheader">Product details</div>
        <div role="columnheader">Price</div>
      </div>
      <CartLines>
        {({ merchandise }) => (
          <div
            role="row"
            className="flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900"
          >
            <div role="cell" className="flex-shrink-0 mr-7">
              <Link href={`products/${merchandise.product.handle}`}>
                <a>
                  <CartLine.Image
                    className="bg-white border border-black border-opacity-5 rounded-xl "
                    options={{ width: 98, height: 98, crop: "center" }}
                  />
                </a>
              </Link>
            </div>
            <div
              role="cell"
              className="flex flex-col w-full justify-between items-start flex-grow-1 mr-4"
            >
              <Link href={`products/${merchandise.product.handle}`}>
                <a>
                  <CartLine.ProductTitle className="text-lg font-medium" />
                </a>
              </Link>
              <CartLine.SelectedOptions as="ul" className="text-xs space-y-1">
                {({ name, value }: { name: string; value: string }) => (
                  <>
                    {name}: {value}
                  </>
                )}
              </CartLine.SelectedOptions>
              <CartLine.Attributes as="ul" className="text-sm space-y-1">
                {({ key, value }: { key: string; value: string }) => (
                  <>
                    {key}: {value}
                  </>
                )}
              </CartLine.Attributes>
              <CartItemQuantity />
            </div>
            <div
              role="cell"
              className="flex flex-col justify-between items-end"
            >
              <CartLine.QuantityAdjustButton
                adjust="remove"
                aria-label="Remove from cart"
                className="disabled:pointer-events-all disabled:cursor-wait"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </CartLine.QuantityAdjustButton>
              <CartLine.Price className="text-lg" />
            </div>
          </div>
        )}
      </CartLines>
    </div>
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
