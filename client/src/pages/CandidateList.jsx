import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
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
import Layout from '../components/Layout';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [candidateLists, setCandidateLists] = useState([]);
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
  useEffect(() => {
    if (isSuccess) {
      setCandidateLists(candidates);
    }
  }, [isSuccess, candidates]);

  const rows = candidateLists?.map((candidate) => {
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
      {' '}
      <Layout>
        {isSuccess && (
          <>
            <Box sx={{ bgcolor: 'white', p: 2, borderRadius: '10px' }}>
              <div>
                <TextField
                  sx={{ mb: 2, width: '300px' }}
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  color="primary"
                />
              </div>
              <TableContainer sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="left">WhatsApp</TableCell>
                      <TableCell align="left">Convert Student</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
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
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="left">{row.phone}</TableCell>
                          <TableCell align="left">
                            <a
                              href={`https://wa.me/${row.phone}`}
                              target="_blank"
                            >
                              <Button
                                variant="contained"
                                value={row.phone}
                                color="success"
                              >
                                <FaWhatsapp size={25} color="white" />
                              </Button>
                            </a>
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              variant="contained"
                              value={row.id}
                              onClick={handleClick}
                            >
                              Convert
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
            </Box>
          </>
        )}
      </Layout>
    </>
  );
}

export default CandidateList;
