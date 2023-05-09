import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import { useGetAllCandidatesQuery } from '../features/candidate/candidateApi';
import TextField from '@mui/material/TextField';
import CreateStudentModal from '../components/CreateStudentModal';


function CandidateList() {
  const {
    data: candidates,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllCandidatesQuery();

  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [createStudentOpen, setCreateStudentOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const onStudentOpen = () => {
    setCreateStudentOpen(true);
  };

  const onStudentClose = () => {
    setCreateStudentOpen(false);
  };
  const navigate = useNavigate();

  function createData(id, name, email, phone) {
    return { id, name, email, phone };
  }
  const handleClick = (event) => {
    event.preventDefault();
    setSelectedCandidate(event.target.value);
    onStudentOpen();
    console.log('You clicked a candidate.');
    console.log(event.target.value);

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const rows = candidates?.map((candidate) => {
    return createData(
      candidate.id,
      candidate.name,
      candidate.email,
      candidate.phone
    );
  });

  const filteredRows = rows?.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {isSuccess && (
        <>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            style={{ marginBottom: '16px' }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Form ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:nth-of-type(odd)': {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        },
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          value={row.id}
                          onClick={handleClick}
                          size="small"
                        >
                          Convert to Student
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={filteredRows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
          <CreateStudentModal
        createStudentOpen={createStudentOpen}
        onStudentClose={onStudentClose}
        id={selectedCandidate}
      />
        </>
      )}
    </>
  );
}

export default CandidateList;
