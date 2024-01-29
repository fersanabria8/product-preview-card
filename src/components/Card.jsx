import React from 'react'
import '../styles/Card.css'
import desktop from '../assets/images/image-product-desktop.jpg'
import mobile from '../assets/images/image-product-mobile.jpg'
import cart from '../assets/images/icon-cart.svg'

const Card = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className="card-left">
          <img className='desktop' src={desktop} alt="desktop" />
          <img className='mobile' src={mobile} alt="mobile" />
        </div>
        <div className="card-right">
          <div className="text">
            <h4>
              Perfume
            </h4>
            <h1>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className='description'>
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>

            <div className='price'>
              <p>$149.99</p><span>$169.99</span>
            </div>
            <div className='button'>
              <span>
                <img src={cart} alt="cart" />
                Add to Cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card