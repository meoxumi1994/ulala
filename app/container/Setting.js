import { connect } from 'react-redux'
import Components from '../component/Setting'
import { AsyncStorage } from 'react-native';


const mapStateToProps = (state, ownProps) => {
    return ({
        owner: state.data.owner,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogout: () => {
        AsyncStorage.setItem('access_token', '')
        dispatch({
            type: "DATA_OWNER_SET",
            data: {
                "status": "WAIT",
            }
        })
    },
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
