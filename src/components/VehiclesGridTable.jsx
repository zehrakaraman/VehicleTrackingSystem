import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components'
import db from '../Firebase.js'

import VehicleLocation from '../models/VehicleLocation.js';

const Container = styled.div`
    width: auto;
    margin-left: 65vw;
    position: relative;
    padding: 0 5rem;
`

const columns = [
  { id: 'vehicle', label: 'VehicleID', minWidth: 90 },
];

var rows = [
  {no: "1", vehicle: "CAR-1"},
];

async function getVehicleIDs({userID}) {
  const userIDAsNumber = parseInt(userID);
  console.log("getVehicleIDs");
  const querySnapshot = await db.collection("vehicles")
    .where("customerID", "==", parseInt(userIDAsNumber))
    .get();

  const vehiclesIDs = []
  for (const vehicleDoc of querySnapshot.docs) {
    vehiclesIDs.push(vehicleDoc.id);
  }

  return vehiclesIDs;
}

export default function VehiclesGridTable({userID}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [vehicleIDs, setVehicleIDs] = React.useState([]);

  useEffect(() => {
    getVehicleIDs({userID: userID}).then((vehicleIDs) => {
      console.log("vehicleIDs: ", vehicleIDs.length);
      setVehicleIDs(vehicleIDs); 
    });
  }, [userID]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleDetails = (index) => {
    //console.log(index)
  }

  return (
    <Container>
      <Paper sx={{ width: '29vw', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '36vh'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/*vehicleIDs.map(
                  (vehicleID) => <TableCell key={vehicleID}>vehicleID</TableCell>)
                */}
                { columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))} 
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleIDs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((vehicleID) => {
                  return (
                    <TableRow hover role="checkbox"  key={vehicleID} onClick={()=>{toggleDetails(1)}}>
                      {/*columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {value}
                          </TableCell>
                        )
                      })*/}
                      <TableCell key={vehicleID}>
                          {vehicleID}
                      </TableCell>
                    </TableRow>
                   
                  );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
