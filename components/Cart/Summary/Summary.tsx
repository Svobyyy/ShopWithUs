import PriceTagIcon from "@/components/Icons/PriceTagIcon";
import styles from "./Summary.module.css";
import { ProductCart } from "@/Slices/cartSlice";

const Summary = ({
  quantity,
  totalAmount,
  cartData,
}: {
  quantity: number;
  totalAmount: number;
  cartData: ProductCart[];
}) => {
  return (
    <section className={styles.summary}>
      <h5>
        Summary<PriceTagIcon></PriceTagIcon>
      </h5>

      <div>
        <p>Subtotal</p>
        <p>${totalAmount}</p>
      </div>
      <div>
        <p>Quantity of Items</p>
        <p>{quantity}</p>
      </div>
      <div>
        <p>Estimated Delivery & Handling</p>
        <p>FREE</p>
      </div>

      <div className={styles.total}>
        <p>Total</p>
        <p>${totalAmount}</p>
      </div>

      <button
        onClick={async () => {
          const products = cartData.map((data) => {
            return {
              name: data.name,
              price: data.price,
              quantity: data.quantity,
            };
          });

          try {
            const response = await fetch("/api/checkout", {
              method: "POST",
              body: JSON.stringify({ products }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const body = await response.json();
            if (body !== undefined) {
              window.location = body.url;
            }
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Checkout
      </button>
    </section>
  );
};

export default Summary;
