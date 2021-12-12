import {connect} from "react-redux";
import {hideBackdrop} from "../../actions/backdrop";

const Backdrop = ({hideBackdrop, show}) => {

    const cls = []

    if(show) {
        cls.push('backdrop')
    } delete cls[1]



    return (
        <div className={`d-flex ${cls}`}>
            <div className="blur" onClick={hideBackdrop}></div>
            <div className="cart"></div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        show : state.showBackdrop
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hideBackdrop: () => dispatch(hideBackdrop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)