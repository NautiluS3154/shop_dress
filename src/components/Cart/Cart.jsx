// import React from "react";
// import './Cart.css'
// import img from ''
// const Header = () => {
//     return(
//         <div>Cart</div>        
//     )
// }
// export default Cart




import React from 'react'
import './Cart.css'
import img from '../../assets/cart/3fb2e7da-4ca4-47b9-b7ac-588e4e1c7125.jpg'


const Cart = () => {
  return (
    <div className="product-item">
  <img src={img} />
  <div className="product-list">
    <h3>Маленькое черное платье</h3>
    <span className="price">₽ 1999</span>
    <a href="" className="button">
      В корзину
    </a>
  </div>
</div>

  )
}

export default Cart