import VehicleLocationsMap from './VehicleLocationsMap'
import VehiclesGridTable from './VehiclesGridTable'
import ExitButton from './ExitButton'
import VehicleLocationsTable from './DetailTable'

export default function Dashboard() {
    return (
        <div>
            <VehicleLocationsMap />
            <ExitButton  />
            <VehiclesGridTable />
            <VehicleLocationsTable />
        </div> 
        
    )
}