import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-skeleton-loader";

const Latest = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [load,setLoad] = useState(false);
    useEffect(() => {
        const fakeapi = async () => {
            setLoad(true);
            const data = await fetch("https://fakestoreapi.com/products");
            const jsondata = await data.json();
            setProducts(jsondata);
            setFilter(jsondata);
            setLoad(false);
        }
        fakeapi();
    }, []);
    const filterproduct = (cat) => {
        const updatedData = products.filter((x) => x.category === cat);
        setFilter(updatedData);
    }
    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={1000}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={1000}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={1000}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={1000}/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-around">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary">Categories</button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => setFilter(products)}>All Items</button></li>
                        <li><button className="dropdown-item" onClick={() => filterproduct("men's clothing")}>Men's Clothes</button></li>
                        <li><button className="dropdown-item" onClick={() => filterproduct("women's clothing")}>Women's Clothes</button></li>
                        <li><button className="dropdown-item" onClick={() => filterproduct("jewelery")}>Jewelery</button></li>
                        <li><button className="dropdown-item" onClick={() => filterproduct("electronics")}>Electronics</button></li>
                    </ul>
                </div>
            </div><br/><br/>
            <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-wrap flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-around">
                {load?<Loading/>:filter.map((product) => {
                    return (
                        <div className="card border mb-4 rounded" style={{ width: "18rem" }} key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5>{product.category}</h5>
                                <p className="card-title">{product.title}</p>
                                <p className="card-text">${product.price}</p>
                                <NavLink to={`/latest/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Latest;