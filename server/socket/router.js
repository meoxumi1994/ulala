const Router = require('../model/Router')
const User = require('../model/User')
const response = require("../service/response")
const { get_suggest_routers } = require('../service/google')
const { get_highest_rate_match_routers } = require('../service/suggestion')

module.exports = {
    create: ({ from_address, to_address, schedule_time, transport_type, price, phone, license_place, note }, socket, io, _id) => {
        return Promise.resolve().then(() => {
            get_suggest_routers(from_address, to_address)
            .then(results => {
                return Router.create({
                    from_address: from_address,
                    to_address: to_address,
                    suggest_routers: results.routes,
                    schedule_time: schedule_time,
                    transport_type: transport_type,
                    phone: phone,
                    price: price,
                    license_place: license_place,
                    note: note,
                    create_by: _id,
                })
            }).then(router => {
                return User.findById(_id)
            }).then(user => {
                user.phone = phone
                user.license_place = license_place
                return user.save()
            }).then(user => {
                socket.emit("action/get_owner", {})
            })
        });
    },
    cancel: ({ route_id }, socket, io, _id) => {
        return Promise.resolve().then(() => {
                console.log(route_id)
                return Router.findById(route_id).then(route => {
                    route.status = 'END'
                    return route.save()
                })
            }).then(route => {
                socket.emit("action/get_owner", {});
            });
    },
    get: ({ from_address, to_address }, socket, io, _id) => {
        return Promise.resolve().then(() => {
            get_suggest_routers(from_address, to_address)
            .then(result => {
                return Router.find({
                    status: 'WAIT',
                    create_by: { $ne: _id }
                }).then(
                    routers => get_highest_rate_match_routers(result.routes[0], routers)
                )
            })
            .then(suggest_routers => {
                user_ids = suggest_routers.map(sr => sr.create_by)

                socket.emit("action", {
                    type: "INST_FIND_ROUTER",
                    data: {
                        suggest_routers: suggest_routers
                    }
                })
            })
        });
    },
    get_by_id: ({ router_id }, socket, io, _id) => {
        return Router.findById(router_id)
            .then(router => {
                socket.emit("action", {
                    type: "client/DATA_ROUTER",
                    data: {
                        [router_id]: response.gen_router(router)
                    }
                });
            }
        )
    },
};
