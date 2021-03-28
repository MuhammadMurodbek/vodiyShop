import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {StoreContext} from '../Store/StoreG'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 230,
    boxShadow: theme.shadows[5],
    borderRadius:10,
    padding: theme.spacing(2, 2, 2),
    fontSize: 12
  },
}));

export default function SimpleModal() {

  const {setShopCart} = useContext(StoreContext)

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  function handleChange(){
    setShopCart([])
    handleClose();
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Savatchani tozalash</h2>
      <div>
        <button className="btn-style" onClick={handleChange}>Tasdiqlash</button>
        {" "}
        <button className="btn-style" onClick={handleClose}>Bekor qilish</button>
      </div>
    </div>
  );

  return (
    <div>
      <button 
        type="button" 
        onClick={handleOpen}
        className="btn-style"
      >
        Savatchani tozalash
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
