import VehicleLocationsMap from './VehicleLocationsMap'
import VehiclesGridTable from './VehiclesGridTable'
import ExitButton from './ExitButton'
import VehicleLocationsTable from './DetailTable'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
    const params = useParams();
    const userID = params.userID;
    return (
        <div>
            <VehicleLocationsMap userID={userID} />
            <ExitButton  />
            <VehiclesGridTable userID={userID} />
            <VehicleLocationsTable />
        </div> 
        
    )
}