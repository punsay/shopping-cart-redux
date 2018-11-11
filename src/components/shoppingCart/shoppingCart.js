import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incCartItemQty, decCartItemQty, deleteFromCart } from "../../store/actions/cartBuilder";
import './shoppingCart.css';


class ShoppingCart extends Component {


    render() {

        const { cartProducts } = this.props;

        let cartItemsList = cartProducts.map((item) => {
            if (item.quantity) {
                return (
                    <div key={item.id} className="cartItemCard">
                        <div className="cartItemImage">
                            <img className="cartImg" src={item.image} />
                        </div>
                        <div className="cartItemDetail-main">
                            <div className="cartItemInfo">{item.name}</div>
                            <div className="cartItemInfo" >Price:&thinsp;&#8377;&thinsp;{item.price}</div>
                            <div className="cartQty-main">
                                <button disabled={item.availableQty == 0} onClick={() => this.props.incCartItemQty(item)} className="incCartItemBtn">+</button>
                                <div className="cartItemQty" >{item.quantity}</div>
                                <button onClick={() => this.props.decCartItemQty(item)} className="removeFromCartBtn">-</button>
                            </div>
                            <button onClick={() => this.props.deleteFromCart(item)} className="deleteFromCartButton">Remove from Cart</button>
                        </div>
                    </div>
                )
            }
        });
        let orderSummaryList = cartProducts.map((item) => {
            return (
                <div key="item.id" className="summaryCard">
                    <div className="itemName">{item.name}</div>
                    <div className="itemTotalPrice">
                        Total Price:
                        <div>
                            &thinsp;&#8377;&thinsp;{item.price} X {item.quantity} = {item.totalPrice}
                        </div>
                    </div>
                </div>
            );
        });

        //array containing total price (actual price X quantity ) corresponding to each item in cart
        let totalPriceArray = cartProducts.map((item) => item.totalPrice);

        // calculating the grand total
        let totalAmount = totalPriceArray.reduce((a, b) => a + b, 0);

        return (
            <div>
                <h2 className="cartHead">Your Shopping Cart</h2>
                {this.props.cartProducts.length ? (
                    <div className="TTNCart">
                        <div className="items-section">
                            {cartItemsList}
                        </div>
                        <div className="orderSummary-section">
                            <h3>Order Summary</h3>
                            {orderSummaryList}
                            <div className="grandTotal">
                                Grand Total
                                <div>
                                    ({cartProducts.length} {cartProducts.length == 1 ? "item" : "items"}):
                                    &thinsp;&#8377;&thinsp;{totalAmount}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="emptyCartMsg">
                            <h3>
                                Oops !! There are no items in you cart.
                                Please go back to the store to add items to your shopping cart.
                            </h3>
                        </div>
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        cartProducts: state.cart.cartItems,
    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators(

    {
        incCartItemQty,
        decCartItemQty,
        deleteFromCart
    },
    dispatch
)



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);