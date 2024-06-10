import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <div className="w-6/12 m-auto text-2xl">
                <button
                className=" p-2 m-2 bg-black text-white rounded-lg flex justify-start"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && (<h1 className="p-2 mt-10">Cart is empty, Shop now.</h1>)}
                <CartItemList items={cartItems}/>
                {/* <ItemList items={cartItems} /> */}
            </div>
        </div>
    )
}

export default Cart;