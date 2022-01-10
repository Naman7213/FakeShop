import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch(addCart(product));
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
            const jsondata = await data.json();
            setProduct(jsondata);
        }
        getData();
    }, [id]);
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const ShowProduct = () => {
        return (
            <div>
                <div className="container-sm container-md container-lg container-xl py-3">
                    <div className="row py-4">
                        <div className="col-12">
                            <img src={product.image} alt={product.title} hight="350px" width="350px" />
                        </div>
                        <div className="col-12">
                            <h1 className="text-uppercase">{product.category}</h1>
                            <h4>{product.title}</h4>
                            <p className="fw-bolder">{product.rating && product.rating.rate}⭐</p>
                            <p>{product.description}</p>
                            <h6>price - $ {product.price}</h6>
                            <button className="btn btn-success" onClick={()=>addProduct(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <h4 className="text-uppercase fw-bolder">{product.category}</h4>
                    <h6>{product.title}</h6>
                    <p className="fw-bold">Price - $ {product.price}</p>
                    <p>{product.description}</p>
                    <NavLink><button>Add To Cart</button></NavLink>
                </div> */}
            </div>
        )
    }
    return (
        <div>
            <ShowProduct />
        </div>
    )
}

export default Product;