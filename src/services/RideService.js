import axios from 'axios';

export class RideService {

    url = 'https://cors-anywhere.herokuapp.com/' + 'https://traveler-production.up.railway.app/';

    async fetchRides(direction, afterDate, beforeDate) {
        let response = await axios.get(this.url + 'rides/' + `query?direction=${direction}&afterDate=${afterDate}&beforeDate=${beforeDate}`)
        return response.data;
    
    }
    fetchTravelersOfRide() {

    }
    fetchOneRide() {

    }
    deleteRide() {

    }
    createRide() {

    }
    updateRide() {

    }
    addPassenger() {

    }
    removePassenger() {

    }
}