import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.cart.map(item => {
      // c is a number
      const prod = this.props.products.find(p => {
        // find the product based on the number in the cart,
        // comparing to the id of the product.
        return p.get('id') === item
      })
      return prod
    })

    console.log('here is products: ', products.toJS())
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, i) => {
            return <div key={i}>{product.get('name')}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
