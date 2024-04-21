import priceFormatter from "../../utils/priceFormatter";
import "./style.scss";

const CartFooter = ({total}) => {
  const {count, price}  = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} единицы</div>
      <div className="cart-footer__price">{priceFormatter.format(price)} руб.</div>
    </footer>
  );
};

export default CartFooter;
