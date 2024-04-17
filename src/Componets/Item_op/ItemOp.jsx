import React, { useContext } from 'react'
import './ItemOp.css'
import { Link } from 'react-router-dom'
import { BooksContext } from '../../Context/BooksContext';

export const ItemOp = (props) => {
  const {product} = props;
  const {addToCart} = useContext(BooksContext)
  return (
    <div className='itemOp'>
        <Link style={{textDecoration:'none'}} to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <div className="description-cont">
          <div className="title">
            {props.title}
          </div>
          <div className="name">
            {props.author}
          </div>
          <div className="price">
            {props.price}
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
    </div>
  )
}
