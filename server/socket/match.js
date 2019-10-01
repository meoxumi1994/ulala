const Router = require('../model/Router')
const User = require('../model/User')
const Match = require('../model/Match')

module.exports = {
    create: ({ router_id }, socket, io, _id) => {
        return Router.findById(router_id)
            .then(route => {
                date = new Date()
                return Match.create({
                    driver_id: route.create_by,
                    rider_id: _id,
                    router_id: router_id,
                    create_time: date.getTime(),
                })
            }).then(match => {
                socket.emit("action/get_owner", {})
            });
    },
    cancel: ({ match_id }, socket, io, _id) => {
        return Match.findById(match_id)
            .then(match => {
                match.status = 'CANCEL'
                return match.save()
            }).then(match => {
                socket.emit("action/get_owner", {})
            });
    },
}
