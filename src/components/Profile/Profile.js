import React from "react";
import Header from "../MainPage/Header/Header";
import {auth} from "../../firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import {changeStatusSneaker} from "../../actions/ChangeSneakerToCart";
import {changeFavoriteSneaker} from "../../actions/ChangeFavoriteSneaker";

const Profile = ({AddSneakers, removeAddSneaker, addToFavorite}) => {
    const navigation = useNavigate()
    const sneakers = []
    AddSneakers.map(obj => {
        if (obj.favorite) {
            sneakers.push(obj)
        }
        return obj
    })
    return (
        <div>
            <div className="wrapper profile">
                <div className="container-app">
                    <div className="d-flex justify-content-between align-items-center">
                        <Header/>
                        <div className="out-btn">
                            <button type="button" className="btn btn-danger" onClick={() => signOut(auth)}>Выйти
                            </button>
                        </div>
                    </div>
                    <main>
                        <div className="d-flex mt-5">
                            <img src="/images/arrow-left.svg" alt="arrow-left" onClick={() => navigation('/')}
                                 className="out-from-profile"/>
                            <h2>Мои добавленные</h2>
                        </div>
                        <div className="d-flex mt-4">
                            {sneakers.map((obj, index) => {
                                return (
                                    <div className="card-sneaker" key={index}>
                                        <div>
                                            {obj.favorite ?
                                                <i className="fas fa-heart like liked" onClick={() => addToFavorite(obj.id)}></i>
                                                :
                                                <i className="far fa-heart like" onClick={() => addToFavorite(obj.id)}></i>}
                                            <img src={obj.src} alt="sneakers"/>
                                            <p>{obj.name}</p>
                                            <div
                                                className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <p className="price">Цена:</p>
                                                    <p><strong>{obj.price}</strong></p>
                                                </div>
                                                <div>
                                                    <img src={obj.status ? '/images/addCart.svg' : "/images/plus.svg"}
                                                         alt="plus" className="plus" onClick={() => removeAddSneaker(obj.id)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="profile-btn mt-5">
                            {sneakers.length >= 1 ? <button type="button" className="btn btn-success btn-send">Создать
                                заказ</button> : null}
                        </div>
                    </main>
                    <Backdrop/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        AddSneakers: state.sneakers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeAddSneaker: (id) => dispatch(changeStatusSneaker(id)),
        addToFavorite : (id) => dispatch(changeFavoriteSneaker(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)