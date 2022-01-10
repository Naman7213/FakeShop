import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart,delCart } from "../redux/actions";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const cartItems = (item) => {
        return (
            <div>
                <div className="container-fluid border border-secondary">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={item.image} alt={item.title} height="150px" width="150px"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="text-uppercase">{item.category}</h4>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.rating && item.rating.rate}⭐</p>
                            <p><button className="btn btn-dark" onClick={()=>dispatch(addCart(item))}><i className="fa fa-plus"></i></button> {item.qty} <button className="btn btn-dark" onClick={()=>dispatch(delCart(item))}><i className="fa fa-minus"></i></button>  price - <span className="fw-bolder">${item.price}</span></p>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
        )
    }

    const ShowCartEmpty = () => {
        return(
            <div className="bg-dark rounded">
                <h1 className="text-white">Your Cart Is Empty.....</h1>
            </div>
        )
    }
    return (
        <div>
            {state.length===0 ? <ShowCartEmpty/> : state.map(cartItems)}
        </div>
    )
}

export default Cart;