import * as React from 'react';
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

import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';


const Container = styled.div`
    width: auto;
    margin-left: 65vw;
    position: relative;
    padding: 0 5rem;
`

const columns = [
  { id: 'no', label: 'Number', minWidth: 10 },
  { id: 'vehicle', label: 'Vehicle\ID', minWidth: 90 },
];

function createData(no, vehicleID) {
  return { no, vehicleID };
}

var newVehicle = 0

const rows = [];

const Fetchdata = async ()=>{
  db.collection("vehicleInfo").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
          var data = element.data();
          newVehicle = data.vehicleID;
          rows.push(newVehicle)
      });
  })
  console.log(rows)
}


export default function StickyHeadTable() {

  Fetchdata();
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Paper sx={{ width: '29vw', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '88vh'}}>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
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
