module.exports = {
    gen_user: (user) => {
        return {
            _id: user._id,
            name: user.name,
            avatar: user.avatar,
            phone: user.phone,
            license_place: user.license_place,
        }
    },
    gen_router: (route) => {
        return {
            _id: route._id,
            from_address: route.from_address,
            to_address: route.to_address,
            transport_type: route.transport_type,
            note: route.note,
            status: route.status,
            macher_id: route.macher_id,
            phone: route.phone,
            price: route.price,
            status: route.status,
            license_place: route.license_place,
            schedule_time: route.schedule_time,
            create_by: route.create_by,
        }
    },
    gen_match: (match) => {
        return {
            _id: match._id,
            driver_id: match.driver_id,
            rider_id: match.rider_id,
            router_id: match.router_id,
            status: match.status,
        }
    },
    gen_message: (message) => {
        return {
            _id: message._id,
            match_id: message.match_id,
            user_id: message.user_id,
            content: message.content,
        }
    }
};
