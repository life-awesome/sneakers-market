import React from "react";
import {connect} from "react-redux";
import {showBackdrop} from "../../../actions/backdrop";

const Header = ({showBackdrop}) => {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src='/images/logo.svg' alt="logo"/>
                <div className="ms-3">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="d-flex right-header">
                <div>
                    <img src="/images/cart.svg" alt="cart" onClick={showBackdrop}/>
                </div>
                <div>
                    <img src="/images/favorite.svg" alt="favorite"/>
                </div>
                <div>
                    <img src="/images/profile.svg" alt="profile"/>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = state => {
    return {
        backdrop : state.showBackdrop
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showBackdrop : () => dispatch(showBackdrop())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)