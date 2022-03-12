import react from 'react'
import Map from './Map'
import Grid from './GridTable'

export default function Dashboard() {
    return (
        <div>
            <Map width= '70vw' height= '100vh' />
            <Grid width= '30vw' height= '100vh'/>
        </div>
        
    )
}