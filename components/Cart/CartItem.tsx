import Image from "next/image";
import { CartItem } from "../../types/cart";

interface CartItemProps extends CartItem {
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
    <tr>
      <td>
        {product.imageSrc && <Image src={product.imageSrc} width={100} />}
        <span>{product.name}</span>
      </td>
      {weightCount > 0 ? (
        <td>
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
        <td> - </td>
      )}
      <td>
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
      <td>
        {priceCount > 0 && weight in product.prices
          ? product.prices[weight] * quantity
          : "-"}
      </td>
    </tr>
  );
};

export default CartItem;
