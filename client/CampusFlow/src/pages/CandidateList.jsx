import React from 'react'
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SideBar from '../components/SideBar.jsx';  

const mockData = [
  {
    "form_id": "O9lXh3",
    "name": "Tom Anderson",
    "email": "zq3hdj@gmail.com",
    "phone": "235-896-7410"
  },
  {
    "form_id": "f8IY25",
    "name": "Mary Wilson",
    "email": "bemnao@yahoo.com",
    "phone": "659-745-8032"
  },
  {
    "form_id": "DF4A1p",
    "name": "Bob Johnson",
    "email": "zlphex@hotmail.com",
    "phone": "125-458-9632"
  },
  {
    "form_id": "oNQ7Bc",
    "name": "Alice Lee",
    "email": "oqbdbm@gmail.com",
    "phone": "895-698-4170"
  },
  {
    "form_id": "tb1ZiL",
    "name": "David Anderson",
    "email": "hfkwxl@hotmail.com",
    "phone": "720-310-4789"
  },
  {
    "form_id": "K7dY93",
    "name": "Emily Lee",
    "email": "uynqdj@yahoo.com",
    "phone": "142-659-8702"
  },
  {
    "form_id": "9D2fLc",
    "name": "John Doe",
    "email": "qxrqho@hotmail.com",
    "phone": "684-259-7031"
  },
  {
    "form_id": "w6avX9",
    "name": "Mary Johnson",
    "email": "uhkqsb@gmail.com",
    "phone": "547-138-9260"
  },
  {
    "form_id": "Wf5xy7",
    "name": "Tom Lee",
    "email": "dxcfgt@hotmail.com",
    "phone": "613-597-8461"
  },
  {
    "form_id": "iH9Gz5",
    "name": "Emily Taylor",
    "email": "boqwxl@yahoo.com",
    "phone": "365-180-9723"
  },
  {
    "form_id": "GJ7Rw0",
    "name": "John Anderson",
    "email": "lzfnhg@hotmail.com",
    "phone": "489-736-2510"
  },
  {
    "form_id": "cE3jT1",
    "name": "Jane Wilson",
    "email": "nwypld@gmail.com",
    "phone": "926-147-5039"
  },
  {
    "form_id": "rM2gY5",
    "name": "David Smith",
    "email": "kxbpty@yahoo.com",
    "phone": "702-413-6985"
  },
  {
    "form_id": "Xo9ba6",
    "name": "Tom Johnson",
    "email": "qopwcd@hotmail.com",
    "phone": "869-312-5076"
  },
  {
    "form_id": "LJ3cm1",
    "name": "Mary Brown",
    "email": "mglpkd@gmail.com",
    "phone": "251-973-6805"
  },
  {
    "form_id": "eU4hV8",
    "name": "John Taylor",
    "email": "ctkyzf@yahoo.com",
    "phone": "579-463-8201"
    },
    {
    "form_id": "hP0sJ9",
    "name": "Alice Smith",
    "email": "xqebkw@hotmail.com",
    "phone": "415-928-6073"
    },
    {
    "form_id": "iF6cM4",
    "name": "Bob Wilson",
    "email": "mtzfqh@gmail.com",
    "phone": "347-680-9351"
    },
    {
    "form_id": "rC7bN5",
    "name": "Emily Anderson",
    "email": "myzxnc@yahoo.com",
    "phone": "809-374-9265"
    }
]


function createData(
  id,
  name,
  email,
  phone,
) {
  return { id, name, email, phone };
}

const rows = mockData.map((candidate) => {
  return createData(
    candidate.form_id,
    candidate.name,
    candidate.email,
    candidate.phone,
  );
});

const handleClick = (event) => {
  event.preventDefault();
  console.log('You clicked a candidate.');
  console.log(event.target.value);
};

function CandidateList() {
  return (
    <>
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
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                <Button variant='contained' value={row.id} onClick={handleClick}>
                Convert to Student
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default CandidateList



