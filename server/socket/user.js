const User = require("../model/User");
const Router = require("../model/Router");
const Match = require("../model/Match")
const response = require("../service/response")

module.exports = {
    join_global: (action, socket, io, _id) => {
        return Promise.resolve().then(() => {
            socket.join(_id);
        });
    },
    leave_global: (action, socket, io, _id) => {
        return Promise.resolve().then(() => {
            socket.leave(_id);
        });
    },
    get_owner: (action, socket, io, _id) => {
        user = undefined
        routers = []
        ride_matches = []
        driver_matches = []

        return User.findById(_id).then(_user => {
            user = _user
            if(!user) throw "user not found"
            return Router.find({ status: 'WAIT', create_by: _id})
        }).then(r => {
            routers = r
            return Match.find({ status: 'MATCHED', rider_id: _id })
        }).then(m => {
            driver_matches = m
            return Match.find({ status: 'MATCHED', driver_id: _id })
        })
        .then(m => {
            ride_matches = m

            routers = routers.map(r => response.gen_router(r))
            ride_matches = ride_matches.map(m => response.gen_match(m))
            driver_matches = driver_matches.map(m => response.gen_match(m))

            return socket.emit("action", {
                type: "client/DATA_OWNER_SET",
                data: {
                    _id: _id,
                    name: user.name,
                    avatar: user.avatar,
                    phone: user.phone,
                    license_place: user.license_place,
                    status: 'LOGED',
                    routers: routers || [],
                    rider_matches: ride_matches || [],
                    driver_matches: driver_matches || [],
                }
            });
        }).then(() => {
            return Router.findOne({
                matcher_id: _id,
                status: 'MATCHER',
            }).then(route => {
                return
            })
        });
    },
    put_trace: ({ trace }, socket, io, _id) => {
        return User.findById(_id).then(user => {
            if (!user) throw "can't find user";
            if (!user.trace) user.trace = {};
            user.trace = {
                ...user.trace,
                ...trace
            };
            user.markModified("trace");
            return user.save();
        });
    },
    get_by_id: ({ user_id }, socket, io, _id) => {
        return User.findById(user_id)
            .then(user => {
                socket.emit("action", {
                    type: "client/DATA_USER",
                    data: {
                        [user_id]: response.gen_user(user)
                    }
                });
            }
        )
    },
};
