import axios from 'axios';

export class RideService {

    url = 'https://traveler-production.up.railway.app/';

    async fetchRides(direction, afterDate, beforeDate) {
        let response = await axios.get(this.url + 'rides/' + `query?direction=${direction.toUpperCase()}&dateAfter=${afterDate}&dateBefore=${beforeDate}`)
        return response.data;
    
    }
    async fetchAllRides() {
        let response = await axios.get('https://traveler-production.up.railway.app/rides');
        return response;
    }

    fetchTravelersOfRide() {

    }
    fetchOneRide() {

    }
    deleteRide() {

    }
    async createRide(ride) {
        let response = await axios.post(this.url + 'rides', {
            direction: ride.direction,
            date: ride.date,
            description: ride.description,
            price: ride.price,
            driver: ride.driver,
            capacity: ride.capacity,
            currentNumberOfPassengers: 0,
            status: ride.status
          })
        return response.status;
    }
    updateRide() {

    }
    addPassenger() {

    }
    removePassenger() {

    }
}