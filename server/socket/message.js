const Message = require("../model/Message");
const response = require("../service/response")

module.exports = {
    create_message: ({ match_id, content }, socket, io, _id) => {
        date = new Date()
        return Message.create({
            match_id: match_id,
            user_id: _id,
            content: content,
            create_time: date.getTime(),
        }).then(message => {
                socket.emit("action", {
                    type: "client/DATA_MESSAGE_ADD_LIST",
                    data: {
                        key: match_id,
                        message: response.gen_message(message)
                    }
                });
            });
    },
    get_messages: ({ match_id }, socket, io, _id) => {
        return Message.find({ match_id: match_id })
            .then(messages => {
                messages = messages.map(message => response.gen_message(message))
                socket.emit("action", {
                    type: "client/DATA_MESSAGE",
                    data: {
                        [match_id]: messages
                    }
                });
            }
        )
    }
};
