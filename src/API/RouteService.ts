import axios from "axios";

export default class RouteService {
    static async getRoute(
        coordinateStart = '37.44076,55.75708',
        coordinateFinish = '46.02436,51.46908',
        roundtrip = 'false',
        source = 'first',
        destination = 'last',
        steps = 'true'
    ) {
        const response = await axios.get(`http://router.project-osrm.org/trip/v1/driving/${coordinateStart};${coordinateFinish}`, {
            params: {
                roundtrip,
                source,
                destination,
                steps
            }
        });
        return response.data.trips[0].legs[0].steps.map((item: { maneuver: { location: any[]; }; }) => item.maneuver.location.reverse());
    }

    static async getCheckPoints() {
        return await axios.get('https://raw.githubusercontent.com/Truekode/API/main/ChekPointsMap.json')
    }

    static async getSupplyRoutes() {
        return await axios.get('https://raw.githubusercontent.com/Truekode/API/main/Sypplys.json')
    }

}
// export const localeSteps = myJson.trips[0].legs[0].steps.map(item => item.maneuver.location.reverse())
