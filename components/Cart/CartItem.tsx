import Image from "next/image";
import type { CartItem as CartItemType } from "../../types/cart";
import styles from "./cartItem.module.css";

interface CartItemProps extends CartItemType {
  onWeightChange?: (weight: string) => void;
  onQuantityChange?: (qty: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  weight,
  quantity,
  onWeightChange,
  onQuantityChange,
}) => {
  const weightCount = Object.keys(product.weights).length;
  const priceCount = Object.keys(product.prices).length;

  return (
    <tr className={styles.cartItem}>
      <th>
        <div className={styles.cartItemMainCell}>
          {product.imageSrc && (
            <Image
              className={styles.cartProductImage}
              src={product.imageSrc}
              width={20}
              height={20}
            />
          )}
          <span className={styles.cartItemProductTitle}>{product.name}</span>
        </div>
      </th>
      {weightCount > 0 ? (
        <td className={styles.cartItemCell}>
          {weightCount === 1 ? (
            product.weights[0]
          ) : (
            <select
              onChange={(e) => onWeightChange && onWeightChange(e.target.value)}
              value={weight}
            >
              {Object.keys(product.weights).map((weightKey) => (
                <option value={weightKey}>{product.weights[weightKey]}</option>
              ))}
            </select>
          )}
        </td>
      ) : (
        <td className={styles.cartItemCell}> - </td>
      )}
      <td className={styles.cartItemCell}>
        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            onQuantityChange && onQuantityChange(parseInt(e.target.value))
          }
          step={1}
          min={1}
        />
      </td>
      <td className={styles.cartItemCell}>
        {priceCount > 0 && weight in product.prices
          ? product.prices[weight] * quantity
          : "-"}
      </td>
    </tr>
  );
};

export default CartItem;
