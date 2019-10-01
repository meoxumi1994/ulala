import { connect } from 'react-redux'
import Components from '../../component/element/MessageItem'
import { get_user } from '../../action'

const mapStateToProps = (state, ownProps) => {
    return ({
        user: get_user(ownProps.user_id),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
