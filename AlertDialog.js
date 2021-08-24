import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleSnackbar from './SimpleSnackbar';

export default function AlertDialog(props) {
    const { open, setOpen,todo,orderId} = props;
    const [status,setStatusim]=useState(false);

    function handleClose() {
        setOpen(false);
    };
    function popAlert() {
        handleClose();
        cancelStatus()
    }
    function cancelStatus() {
        debugger;
        fetch("http://localhost:3310/api/Orders/"+orderId,{method:"put", headers:{'Content-type':'application/json'},})
  .then(res=>res.json())
      .then((res)=>{
        if (res.Status) {
            setStatusim(true);
        }
        
},
(err)=>{
  debugger;
})
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{todo}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ?האם את/ה בטוח/ה
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        לאאא
          </Button>
                    <Button onClick={popAlert} color="primary" autoFocus>
                        בוודאי
          </Button>
                </DialogActions>
            </Dialog>
            <SimpleSnackbar open={status} setOpen={setStatusim}message={"ההזמנה מבוטלת"}></SimpleSnackbar>
        </div>
    );
}
