import { connect } from 'react-redux'
import Components from '../component/Home'

const mapStateToProps = (state, ownProps) => {
    return ({
        owner: state.data.owner,
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
    onCancel: (route_id) => {
        dispatch({
            type: "socket/router/cancel",
            data: {
                route_id: route_id
            }
        })
    }
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
