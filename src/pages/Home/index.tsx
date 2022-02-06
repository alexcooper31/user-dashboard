import { useCallback, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux'
 
import './style.scss'
import User from '../../types/User';
import { LocalState } from '../../store/store'
import StyledModal from '../../components/Modal';
import HomeTable from './table';
import { getUsers, deleteUser } from '../../store/actions';

interface HomeProps {
  users: User[];
  getUsers: () => void;
  deleteUser: (id: number) => void;
}

const Home = (props: HomeProps) => {
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    props.getUsers();
    // eslint-disable-next-line
  }, []);

  const editUser = useCallback((id: number) => {
    setEditUserModal(true)
    const getCurrentUser = props.users.find((user) => user.id === id);
    setCurrentUser(getCurrentUser);
  }, [currentUser, props.users])

  const deleteUser = useCallback((id: number) => {
    setDeleteUserModal(true)
    const getCurrentUser = props.users.find((user) => user.id === id);
    setCurrentUser(getCurrentUser);
  }, [])

  const confirmDeletion = useCallback(() => {
    props.deleteUser(currentUser! && currentUser.id);
    setDeleteUserModal(false)
  }, [currentUser]);

  return (
    <div className='container'>
      <div className='content'>
        <StyledModal
          open={addUserModal}
          close={() => setAddUserModal(false)}
          prompt='submit'
          title='Add User'
        >
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Name"
            defaultValue=''
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Username"
            defaultValue=''
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Email"
            defaultValue=''
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="City"
            defaultValue=''
          />
        </StyledModal>
        <StyledModal
          open={deleteUserModal}
          close={() => setDeleteUserModal(false)}
          prompt='delete'
          title='Delete User'
          onSave={() => confirmDeletion()}
        >
          Are you sure you want to delete this user?
        </StyledModal>
        <StyledModal
          open={editUserModal}
          close={() => setEditUserModal(false)}
          prompt='submit'
          title='Edit User'
        >
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Name"
            defaultValue={currentUser && currentUser.name}
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Username"
            defaultValue={currentUser && currentUser.username}
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="Email"
            defaultValue={currentUser && currentUser.email}
          />
          <TextField
            sx={{ width: '100%', marginBottom: '20px'}}          
            error={false}
            label="City"
            defaultValue={currentUser && currentUser.address.city}
          />
        </StyledModal>
        <Typography sx={{ fontWeight: 'bold', padding: '30px 0' }} variant='h3'>
          Dashboard
        </Typography>
        
        {props.users && props.users.length > 0 ? 
          <HomeTable
          users={props.users}
          addUser={() => setAddUserModal(true)}
          deleteUser={(id: number) => deleteUser(id)}
          editUser={(id: number) => editUser(id)}
          />
          : <div> No Data </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: LocalState) => ({
  users: state.users,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch(getUsers()),
  deleteUser: (id: number) => dispatch(deleteUser(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
