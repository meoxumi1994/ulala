import { connect } from "react-redux";
import Components from "../component/CreateRoutePrice";

const mapStateToProps = (state, ownProps) => {
    return ({})
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreateRouter: (price) => {
        dispatch({
            type: "INST_CREATE_ROUTER",
            data: {
                price: parseInt(price),
            }
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    };
};

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(Components)

export default ComponentsContainer
