import { connect } from 'react-redux'
import Components from '../../component/element/MatchRider'
import { get_user, get_router } from '../../action'

const mapStateToProps = (state, ownProps) => {
    return ({
        rider: get_user(ownProps.rider_id),
        driver: get_user(ownProps.driver_id),
        router: get_router(ownProps.router_id),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetMessage: match_id => {
        dispatch({
            type: 'INST_MATCH_CHAT',
            data: {
                match_id: match_id
            }
        })
        dispatch({
            type: 'socket/message/get_messages',
            data: {
                match_id: match_id
            }
        })
    }
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
