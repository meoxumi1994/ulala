import { connect } from 'react-redux'
import Components from '../component/index'

const mapStateToProps = (state, ownProps) => {
    return ({
        owner: state.data.owner,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
