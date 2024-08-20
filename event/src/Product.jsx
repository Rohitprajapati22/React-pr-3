import React from 'react'
import { category } from './Data'
import './style.css'

function Product({ product, filterProduct }) {

    return (
        <div className='mt-5'>
            <button onClick={() => filterProduct("all")} className='btn bg-primary'>All</button>
            {
                category.map((cat) => {
                    return (
                        <button onClick={() => filterProduct(cat.name)} key={cat.id} className='btn bg-primary'>{cat.name}</button>
                    )
                })
            }



            <div className="container">
                <div className="row mt-4">
                    {
                        product.map((p) => {
                            return (
                                <div key={p.id} className="col-lg-3 mb-3">
                                    <div className="product-card rounded-4">
                                        <img src={p.img} style={{ height: "200px", objectFit: "contain" }} className="card-img-top" alt="..." />
                                        <div className="card-info">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text fs-5 fw-bold">RS :- {p.price}</p>
                                            <a href="#" className="btn btn-primary" >Read More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Product