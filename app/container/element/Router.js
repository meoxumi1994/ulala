import { connect } from "react-redux";
import Components from "../component/MatchList";

const mapStateToProps = (state, ownProps) => {
    return ({
        from_address: state.inst.findrouter.from_address,
        to_address: state.inst.findrouter.to_address,
        suggest_routers: state.inst.findrouter.suggest_routers,
        user_map: state.data.user,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onMatchRoute: (route) => {
        dispatch({
            type: "INST_MATCH_ROUTE",
            data: {
                route: route
            }
        })
    },
    dispatch_get_user: action.get_user(state, )
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { from_address, to_address } = stateProps;
    const { dispatchFindRouter } = dispatchProps;
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        onFindRouter: () => {
            dispatchFindRouter(from_address, to_address)
        }
    };
};

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(Components)

export default ComponentsContainer
