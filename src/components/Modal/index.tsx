import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
 
import './style.scss'

const StyledModal = (props: any) => {

  return (
    <Modal open={props.open} onClose={props.close}>
      <div className='modalCard'>
        <div className='modalTitle'> { props.title }</div>
        <div className='modalContent'>
          { props.children }
        </div>
        <div className='modalControl'>
          <Button
            variant='contained'
            size='medium'
            color='info'
            sx={{ backgroundColor: 'gray', marginRight: '20px' }}
            onClick={props.close}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            size='medium'
            color={props.prompt === 'delete' ? 'error' : 'primary'}
            sx={{ padding: '5px 30px' }} 
            onClick={props.onSave}
          >
            { props.prompt }
          </Button>
        </div>
      </div>
    </Modal>
        
  );
}

export default StyledModal
