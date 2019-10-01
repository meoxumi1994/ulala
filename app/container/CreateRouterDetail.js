import { connect } from "react-redux";
import Components from "../component/CreateRouterDetail";

const mapStateToProps = (state, ownProps) => {
    return ({
        createrouter: state.inst.createrouter,
        phone: state.data.owner.phone,
        license_place: state.data.owner.license_place,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatchCreateRouter: (createrouter, note, license_place, phone) => {
        dispatch({
            type: "socket/router/create",
            data: {
                from_address: createrouter.from_address,
                to_address: createrouter.to_address,
                schedule_time: createrouter.schedule_time,
                price: createrouter.price,
                transport_type: createrouter.transport_type,
                phone: phone,
                license_place: license_place,
                note: note,
            }
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { createrouter } = stateProps;
    const { dispatchCreateRouter } = dispatchProps;
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        onCreateRouter: (note, license_place, phone) => {
            dispatchCreateRouter(createrouter, note, license_place, phone)
        }
    };
};

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergeProps
)(Components)

export default ComponentsContainer
