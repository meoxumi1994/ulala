import { connect } from 'react-redux'
import Components from '../component/Login'

const mapStateToProps = (state, ownProps) => {
    return ({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginFacebook: access_token => {
        dispatch({
            type: "socket/auth/loginfacebook",
            data: {
                access_token: access_token
            }
        })
        dispatch({
            type: "DATA_OWNER",
            data: {
                status: 'LOGING'
            }
        })
    },
})

const ComponentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Components)

export default ComponentsContainer
