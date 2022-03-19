export default class Vehicle {
    constructor (id, timestamp, lat, lng) {
        this.id = id;
        this.locations = [{timestamp: timestamp, lat: lat, lng: lng}]
    }
}
