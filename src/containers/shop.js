import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingProducts from '../components/shoppingProducts/shoppingProducts';
import ShoppingCart from '../components/shoppingCart/shoppingCart';
import './shop.css';

class Shop extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="goToCart-main" >
                        <button className="goToCartBtn">
                            <NavLink to="/cart" className="cartHyperLink">
                                <div className="cartQty">
                                    {this.props.cartProducts.length} &nbsp;
                                    {
                                        (this.props.cartProducts.length == 0) ||
                                            (this.props.cartProducts.length == 1) ? "item" : "items"
                                    }
                                </div>
                                <img className="cartIcon" src="src/images/cartIcon.png" />
                            </NavLink>
                        </button>
                    </div>
                    <Switch>
                        <Route exact path='/' component={ShoppingProducts} />
                        <Route path='/cart' component={ShoppingCart} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        cartProducts: state.cart.cartItems
    }

}

export default connect(mapStateToProps, null)(Shop);