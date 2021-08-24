import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//import { Button } from 'bootstrap';
import Button from '@material-ui/core/Button';
import AlertDialog from './AlertDialog';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userId:state.userId
  };
}
    
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function createData(id,parkTime, parkFinish, Length, status, rate, parkOrder,locationName) {
  return {
    id,
    parkTime,
    parkFinish,
    Length,
    status,
    rate,
    parkOrder,
    locationName
  };
}

function Row(props) {
  const { row,color } = props;
  const [status,setStatusim]=useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const classy = useStyles();
  const done ="ביטול הזמנה";

  function handleClickOpen(e) {
    setStatusim(true);
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root} style={{backgroundColor:color}}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.parkTime}
        </TableCell>
        <TableCell >{row.parkFinish}</TableCell>
        <TableCell >{row.Length}</TableCell>
        <TableCell >{row.status}</TableCell>
        <TableCell >{row.rate}</TableCell>
      </TableRow>
       <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <div className={classy.root}>
              <Button variant="contained" color="primary" disabled={row.status=='request'||row.status=='ok'?false:true}onClick={handleClickOpen}>ביטול ההזמנה</Button>
              <AlertDialog open={status} setOpen={setStatusim}todo={done}orderId={row.id}></AlertDialog>
              <mark style={{marginLeft:"30vw"}} hidden={row.locationName!=null?false:true}>{row.locationName}<strong>:מיקום החניה בחניון   </strong></mark>
                </div>               
          </Collapse>
        </TableCell>
      </TableRow> 
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id:PropTypes.number.isRequired,
    parkTime: PropTypes.string.isRequired,
    parkFinish: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    Length: PropTypes.number.isRequired,
    parkOrder: PropTypes.string.isRequired,
    locationName:PropTypes.string.isRequired,
  }).isRequired,
};

// const rows = [
//   createData('06/06/2021 12:00','06/06/2021 14:00',2.0,'request',60,'05/04/2021',null),
//   createData('05/05/2021 21:00', '05/05/2021 22:00', 1.0, 'ok', 30, '05/04/2021','floor 1 place 2'),
//   createData('04/04/2021 7:00', '04/04/2021 8:00', 1.0, 'notPossible', 30, '03/04/2021',null),
//   createData('04/04/2020 7:00', '04/04/2020 8:00', 1.0, 'done', 30, '03/04/2020','floor 1 place 1'),
// ];

export default connect(mapStateToProps)(function CollapsibleTable(props) {
  const { userId, dispatch } = props;
  const [allOrders,SetAllOrders]=useState([]);
  const [rows,setRows]=useState([]);
  
  useEffect(function () {
  fetch("http://localhost:3310/api/Orders/"+userId,{method:"get", headers:{'Content-type':'application/json'},})
  .then(res=>res.json())
      .then((res)=>{
        SetAllOrders(res.Data);
},
(err)=>{
  debugger;
})
},[]);

useEffect(function(params) {
  var arr=[];
  allOrders.forEach((item)=>arr.push(createData(item.id,item.parkTime, item.parkFinish,item.parkingLength,item.status,item.rate,item.signatureTime,item.locationName)));
  setRows(arr);
},[allOrders])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
         <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><b>תאריך ושעת התחלה</b></TableCell>
            <TableCell ><b>תאריך ושעת סיום</b></TableCell>
            <TableCell ><b>משך זמן החניה</b></TableCell>
            <TableCell ><b>סטטוס</b></TableCell>
            <TableCell ><b>תעריף</b></TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
          {rows.map((row) => (
            <Row key={row.parkOrder} row={row} color={row.status=='request'?"white":row.status=='ok'?"lightGreen":row.status=='notPossible'?"pink":"lightGray"}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
})
