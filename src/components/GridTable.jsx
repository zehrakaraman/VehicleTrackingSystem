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
  { id: 'no', label: 'Nu', minWidth: 10 },
  { id: 'vehicle', label: 'VehicleID', minWidth: 90 },
];

var rows = [
  {no: "1", vehicle: "CAR-1"},
];

async function fetchData() {
  const vehicleLocationsQuerySnapshot =
      await db.collection("vehicle_locations").get()
  const vehicleLocationDocs = vehicleLocationsQuerySnapshot.docs;

  const vehicleLocations = []
  for (const vehicleLocationDoc of vehicleLocationDocs) {
    const vehicleLocation =
        VehicleLocation.fromQueryDocSnapshot(vehicleLocationDoc);
    vehicleLocations.push(vehicleLocation);
  }

  return vehicleLocations;
}

//onClick={toggleDetails(row.no)}
export default function StickyHeadTable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    fetchData().then((vehicleLocations) => {
      vehicleLocations.forEach((vehicleLocation) => {
        console.log("vehicleLocation.id", vehicleLocation.id);
        console.log("vehicleLocation.timestamp", vehicleLocation.timestamp);
        console.log("vehicleLocation.lat", vehicleLocation.lat);
        console.log("vehicleLocation.lng", vehicleLocation.lng);
        console.log("\n");
      });
    });
  });

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
                {columns.map((column) => (
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox"  key={row.no} onClick={()=>{toggleDetails(row.no)}}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {value}
                          </TableCell>
                        )
                      })}
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
