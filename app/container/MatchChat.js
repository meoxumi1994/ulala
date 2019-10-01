import { connect } from "react-redux";
import Components from "../component/MatchChat";

const mapStateToProps = (state, ownProps) => {
    const match_id = state.inst.matchchat.match_id
    if(!match_id) return ({})

    const messages = state.data.message[match_id]
    console.log("match_id =" + match_id)
    console.log("messages =" + messages)
    return ({
        match_id: match_id,
        messages: messages
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSend: (match_id, content) => {
        dispatch({
            type: 'socket/message/create_message',
            data: {
                match_id: match_id,
                content: content,
            }
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
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
