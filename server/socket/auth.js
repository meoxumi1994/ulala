const User = require("../model/User");

const jwt = require("jsonwebtoken");

const Facebook = require("../service/facebook");

const join_after_login = (socket, io, _id) => {
    agency.join_global({}, socket, io, _id)
    user.join_global({}, socket, io, _id)
}

module.exports = {
    loginfacebook: ({ access_token }, socket, io) => {
        return Promise.resolve()
            .then(() => {
                if (!access_token) throw "missing access_token";
                return Facebook.getUserInfo(access_token);
            })
            .then(response => {
                const { id, name, picture, cover } = response;
                return User.findOneAndUpdate({
                    login_type: "FACEBOOK",
                    ref: id
                }, {
                    name: name,
                    avatar: picture && picture.data && picture.data.url,
                    extra_data: response,
                }, { new: true }).then(user => {
                    if (user) return user;
                    return User.create({
                        login_type: "FACEBOOK",
                        ref: id,
                        name: name,
                        avatar: picture && picture.data && picture.data.url,
                        extra_data: response,
                    })
                })
            })
            .then(user => {
                const access_token = jwt.sign(
                    { _id: user._id },
                    process.env.USER_SECRET_KEY
                );
                socket.emit("action/update_access_token", {
                    access_token: access_token
                });
                socket.emit("action/get_owner", {});
            })
    }
};
