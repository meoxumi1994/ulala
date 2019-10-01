const fetch = require("node-fetch");

module.exports = {
    get_suggest_routers: (from_address, to_address) => {
        url = "https://maps.googleapis.com/maps/api/directions/json?"
        + "origin=place_id:" + from_address.place_id
        + "&destination=place_id:" + to_address.place_id
        + "&key=" + process.env.GOOGLE_API_KEY
        res = fetch(url).then(response => response.json())
        if(!res) throw "service|get_suggest_routers|route_not_found"
        return res
    }
};
