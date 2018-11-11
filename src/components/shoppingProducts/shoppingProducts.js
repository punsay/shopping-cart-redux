import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, decShopItemQty } from '../../store/actions/cartBuilder';
import './shoppingProducts.css';

class ShoppingProducts extends Component {

    handleAddToCart = (product) => {

        this.props.addToCart(product);
        this.props.decShopItemQty(product.id);

    }

    render() {

        console.log("ADDED: ", this.props.cartProducts);

        const productsList = this.props.products.map((item) => {
            return (
                <div key={item.id} className="productCard">
                    <div className="itemImage">
                        <img className="productImg" src={item.image} />
                    </div>
                    <div className="itemDetail" >{item.name}</div>
                    <div className="itemDetail" >In Stock({item.quantity})</div>
                    <div className="itemDetail" >Price:&thinsp;&#8377;&thinsp;{item.price}</div>
                    <button disabled={item.quantity === 0} onClick={() => this.handleAddToCart(item)} className="addToCartBtn">ADD TO CART</button>
                </div>
            );
        });

        return (
            <Fragment>
                <h2 className="shopHead">To The New Mart</h2>
                <div className="TTNShop">
                    {productsList}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        cartProducts: state.cart.cartItems  // only used for checking the status of my cart in console
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        addToCart,
        decShopItemQty,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingProducts);