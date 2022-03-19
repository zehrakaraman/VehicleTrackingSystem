export default class VehicleLocation {
    constructor (id, timestamp, lat, lng) {
        this.id = id;
        this.timestamp = timestamp;
        this.lat = lat;
        this.lng = lng;
    }

    static fromQueryDocSnapshot(queryDocSnapshot) {
        const docData = queryDocSnapshot.data();
        const timestamp = docData.timestamp.toDate();
        return new VehicleLocation(
            queryDocSnapshot.id,
            timestamp,
            docData.lat,
            docData.lng,
        );
    }
}
