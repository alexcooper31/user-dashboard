import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 
import './style.scss'
import User from '../../types/User';

const HomeTable = (props: any) => {
  return (
    <TableContainer component={Paper}>
      <div className='tableHeader'>
        <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
          User list
        </Typography>
        <Button variant='contained' sx={{ padding: '5px 30px' }} onClick={() => props.addUser(true)}>
          Add New
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users && props.users.map((user: User) => (
            <TableRow key={`${user.id}`}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address && user.address.city}</TableCell>
              <TableCell>
                <Button
                  onClick={() => props.editUser(user.id)}
                  variant='contained'
                  size='medium'
                  color='warning'
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => props.deleteUser(user.id)}
                  variant='contained'
                  size='medium'
                  color='error'
                >
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HomeTable;
