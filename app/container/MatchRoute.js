import { connect } from "react-redux";
import Components from "../component/MatchRoute";

const mapStateToProps = (state, ownProps) => {
    const route = state.inst.matchroute.route
    if(!route) return ({})

    if(route.create_by == state.data.owner._id){
        user = state.data.owner
    } else {
        user = state.data.user[route.create_by]
    }

    return ({
        route: route,
        user: user,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreateMatch: (router_id) => {
        dispatch({
            type: "socket/match/create",
            data: {
                router_id: router_id
            }
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { from_address, to_address } = stateProps;
    const { dispatchFindRouter } = dispatchProps;
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
