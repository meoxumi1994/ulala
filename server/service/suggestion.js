const response = require("./response")

get_rate_match_routers = (router, m_router) => {
    steps = router.legs[0].steps
    m_steps = m_router.legs[0].steps
    m_address_exist = {}
    m_steps.map(m_step => {
        m_address_exist[m_step.start_location.lat + "," + m_step.start_location.lng] = 1
        m_address_exist[m_step.end_location.lat + "," + m_step.end_location.lng] = 1
    })

    matched_distance = 0
    steps.map(step => {
        if(m_address_exist[step.start_location.lat + "," + step.start_location.lng] &&
            m_address_exist[step.end_location.lat + "," + step.end_location.lng]){
                matched_distance += step.distance.value
            }
    })
    return matched_distance / router.legs[0].distance.value
}

module.exports = {
    get_highest_rate_match_routers: (route, m_routers) => {
        m_rated_routers = []
        m_routers.map(m_router => {
            rate = get_rate_match_routers(route, m_router.suggest_routers[0])

            if(rate > 0.3){
                router = response.gen_router(m_router)
                m_rated_routers.push({
                    ...router,
                    rate: rate,
                })
            }
        })
        m_rated_routers.sort((a, b) => b.rate - a.rate)
        return m_rated_routers
    }
};
