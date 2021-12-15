import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {changeStatusSneaker} from "../../../actions/ChangeSneakerToCart";
import {changeFavoriteSneaker} from "../../../actions/ChangeFavoriteSneaker";
import {fetchSneakers} from "../../../actions/async/asyncAddAllSneakers";

const Content = ({sneakers, addToCart, addToFavorite, getSneakers}) => {
    const [search, setSearch] = useState('')
    useEffect(() => {
        getSneakers()
    }, [getSneakers])
    return (
        <>
            <div className="d-flex justify-content-between mt-5">
                <h2>Все кроссовки</h2>
                <div className="d-flex align-items-center">
                    <img src="/images/search.svg" alt="search-icon"/>
                    <input type="text" placeholder={"Поиск..."} className="search"
                           onChange={e => setSearch(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="card-wrapper">
                    {sneakers
                        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((obj, index) => {
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
                                                     alt="plus" className="plus" onClick={() => addToCart(obj.id)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(changeStatusSneaker(id)),
        addToFavorite : (id) => dispatch(changeFavoriteSneaker(id)),
        getSneakers : () => dispatch(fetchSneakers())
    }
}
const mapStateToProps = (state) => {
    return {
        sneakers: state.sneakers
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)