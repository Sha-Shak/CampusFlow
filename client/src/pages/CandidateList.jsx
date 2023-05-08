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

const mockData = [
  {
    id: 'O9lXh3',
    name: 'Tom Anderson',
    email: 'zq3hdj@gmail.com',
    phone: '235-896-7410',
  },
  {
    id: 'f8IY25',
    name: 'Mary Wilson',
    email: 'bemnao@yahoo.com',
    phone: '659-745-8032',
  },
  {
    id: 'DF4A1p',
    name: 'Bob Johnson',
    email: 'zlphex@hotmail.com',
    phone: '125-458-9632',
  },
  {
    id: 'oNQ7Bc',
    name: 'Alice Lee',
    email: 'oqbdbm@gmail.com',
    phone: '895-698-4170',
  },
  {
    id: 'tb1ZiL',
    name: 'David Anderson',
    email: 'hfkwxl@hotmail.com',
    phone: '720-310-4789',
  },
  {
    id: 'K7dY93',
    name: 'Emily Lee',
    email: 'uynqdj@yahoo.com',
    phone: '142-659-8702',
  },
  {
    id: '9D2fLc',
    name: 'John Doe',
    email: 'qxrqho@hotmail.com',
    phone: '684-259-7031',
  },
  {
    id: 'w6avX9',
    name: 'Mary Johnson',
    email: 'uhkqsb@gmail.com',
    phone: '547-138-9260',
  },
  {
    id: 'Wf5xy7',
    name: 'Tom Lee',
    email: 'dxcfgt@hotmail.com',
    phone: '613-597-8461',
  },
  {
    id: 'iH9Gz5',
    name: 'Emily Taylor',
    email: 'boqwxl@yahoo.com',
    phone: '365-180-9723',
  },
  {
    id: 'GJ7Rw0',
    name: 'John Anderson',
    email: 'lzfnhg@hotmail.com',
    phone: '489-736-2510',
  },
  {
    id: 'cE3jT1',
    name: 'Jane Wilson',
    email: 'nwypld@gmail.com',
    phone: '926-147-5039',
  },
  {
    id: 'rM2gY5',
    name: 'David Smith',
    email: 'kxbpty@yahoo.com',
    phone: '702-413-6985',
  },
  {
    id: 'Xo9ba6',
    name: 'Tom Johnson',
    email: 'qopwcd@hotmail.com',
    phone: '869-312-5076',
  },
  {
    id: 'LJ3cm1',
    name: 'Mary Brown',
    email: 'mglpkd@gmail.com',
    phone: '251-973-6805',
  },
  {
    id: 'eU4hV8',
    name: 'John Taylor',
    email: 'ctkyzf@yahoo.com',
    phone: '579-463-8201',
  },
  {
    id: 'hP0sJ9',
    name: 'Alice Smith',
    email: 'xqebkw@hotmail.com',
    phone: '415-928-6073',
  },
  {
    id: 'iF6cM4',
    name: 'Bob Wilson',
    email: 'mtzfqh@gmail.com',
    phone: '347-680-9351',
  },
  {
    id: 'rC7bN5',
    name: 'Emily Anderson',
    email: 'myzxnc@yahoo.com',
    phone: '809-374-9265',
  },
];

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

  const navigate = useNavigate();

  function createData(id, name, email, phone) {
    return { id, name, email, phone };
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log('You clicked a candidate.');
    navigate(`/createStudent/${event.target.value}`);
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
        </>
      )}
    </>
  );
}

export default CandidateList;
