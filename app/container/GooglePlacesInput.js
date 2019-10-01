import { connect } from 'react-redux'
import Components from '../component/GooglePlacesInput'

const mapStateToProps = (state, ownProps) => {
    return ({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSelectPosition: (data) => {
        dispatch({
            type: ownProps.data_action_type,
            data: {
                [ownProps.data_key]: data
            }
        })
    }
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
