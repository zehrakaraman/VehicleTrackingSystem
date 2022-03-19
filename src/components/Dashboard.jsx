import react from 'react'
import Map from './Map'
import Grid from './GridTable'
import Exit from './Exit'
import DetailList from './DetailTable'

export default function Dashboard() {
    return (
        <div>
            <Map />
            <Exit  />
            <Grid />
            <DetailList />
        </div> 
        
    )
}