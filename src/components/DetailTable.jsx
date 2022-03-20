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

const Container = styled.div`
    width: auto;
    top: 2vh;
    margin-left: 65vw;
    position: relative;
    padding: 0 5rem;
`
var rows = []

const columns = [
    { id: 'no', label: 'Nu', minWidth: 10 },
    { id: 'timestamp', label: 'Timestamp', minWidth: 30 },
    { id: 'lat', label: 'Latitude', minWidth: 30 },
    { id: 'lng', label: 'Longitude', minWidth: 30 },
];

export default function VehicleLocationsTable() {

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
            <TableContainer sx={{ height: '40vh'}}>
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
                        <TableRow hover role="checkbox"  key={row.no} >
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
