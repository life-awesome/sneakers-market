import {connect} from "react-redux";
import {hideBackdrop} from "../../actions/backdrop";
import {changeStatusSneaker} from "../../actions/ChangeSneakerToCart";
const Backdrop = ({hideBackdrop, show, sneakersFavorite, removeSneakerFavorite}) => {

    const cls = []
    show ? cls.push('backdrop') : delete cls[1]
    const sneakers = []
    sneakersFavorite.map(obj => {
        if (obj.status) {
            sneakers.push(obj)
        }
        return obj
    })
    return (
        <div className={`${cls} hide`}>
            <div className="blur" onClick={hideBackdrop}></div>
            <div className="cart">
                <div className="m-4">
                    <h2>Корзина</h2>
                    {sneakers.map(obj => (
                        <div className="d-flex align-items-center cart-sneaker mt-4 justify-content-between">
                            <img src={obj.src} alt="sneaker"/>
                            <div className="sneaker-descr">
                                <div>{obj.name}</div>
                                <div>
                                    <strong>{obj.price}</strong>
                                </div>
                            </div>
                            <div className="cross" onClick={() => removeSneakerFavorite(obj.id)}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        show : state.showBackdrop,
        sneakersFavorite : state.sneakers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hideBackdrop: () => dispatch(hideBackdrop()),
        removeSneakerFavorite : (id) => dispatch(changeStatusSneaker(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)