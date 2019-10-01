import { connect } from "react-redux";
import Components from "../component/CreateRouterGeneral";

const mapStateToProps = (state, ownProps) => {
    return ({
        from_address: state.inst.createrouter.from_address,
        to_address: state.inst.createrouter.to_address,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreateRouter: (schedule_time, transport_type) => {
        dispatch({
            type: 'INST_CREATE_ROUTER',
            data: {
                schedule_time: schedule_time,
                transport_type: transport_type,
            }
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatchCreateRouter } = dispatchProps;
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
