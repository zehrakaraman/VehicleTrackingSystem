import VehicleLocationsMap from './VehicleLocationsMap'
import Grid from './VehiclesGridTable'
import ExitButton from './ExitButton'
import DetailList from './DetailTable'

export default function Dashboard() {
    return (
        <div>
            <VehicleLocationsMap />
            <ExitButton  />
            <Grid />
            <DetailList />
        </div> 
        
    )
}