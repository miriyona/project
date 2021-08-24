import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import DateAndTimePickers from './DateAndTimePickers';
import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import CheckBox from './CheckBox';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { SetCarToUser, SetSize } from './Action';
import SimpleSnackbar from './SimpleSnackbar';

function mapStateToProps(state) {
    return {
        Size: state.size,
        CarToUser: state.carToUser
    };
}

export default connect(mapStateToProps)(function NewOrder(props) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const { Size, CarToUser, dispatch } = props;
    const constOrder={ carToUserId: CarToUser, signatureTime: dateTime, parkTime: new Date(), parkingLength: 0, status: 0, factorCancels: 0, rate: 0, parkFinish: new Date() };
    const [order, setOrder] = useState(constOrder);
    const [orderDateFrom, setOrderDateFrom] = useState(new Date());
    const [orderDateTo, setOrderDateTo] = useState(new Date());
    const [sach, setsach] = useState(0);
    const [status, setStatusim] = useState(false);

    function handleChangeParams(value, prop) {
        debugger;
        var o = { ...order };
        o[prop] = value;
        setOrder(o);
    }

    useEffect(() => {
        debugger;
        var diff = Math.abs(order?.parkFinish - order?.parkTime);
        diff = diff / 60000;
        handleChangeParams(diff, "parkingLength");
    }, [order?.parkTime,order?.parkFinish])

    useEffect(function () {
        handleChangeParams(orderDateFrom, "parkTime");
    }, [orderDateFrom]);

    useEffect(function () {
        handleChangeParams(orderDateTo, "parkFinish");
    }, [orderDateTo]);



    // useEffect(function Sum() {
    //     debugger;
    //     if (Size == 'L' && orderDateFrom.getDate() == tomorrow.getDate()) {
    //         handleChangeParams(order.parkingLength / 30 * 11, 'rate');
    //     }
    //     if (Size == 'S' && orderDateFrom.getDate() == tomorrow.getDate()) {
    //         handleChangeParams(order.parkingLength / 30 * 10, 'rate');
    //     }
    //     if (Size == 'L' && orderDateFrom.getDate() != new Date().getDate()) {
    //         handleChangeParams(order.parkingLength / 30 * 16, 'rate');
    //     }
    //     if (Size == 'S' && orderDateFrom.getDate() != new Date().getDate()) {
    //         handleChangeParams(order.parkingLength / 30 * 15, 'rate');
    //     }
    //     if (Size == 'L' && orderDateFrom.getDate() == new Date().getDate()) {
    //         handleChangeParams(10, 'rate');
    //     }
    //     if (Size == 'S' && orderDateFrom.getDate() == new Date().getDate()) {
    //         handleChangeParams(9, 'rate');
    //     }
    //     // alert("length" + order.parkingLength);
    //     // alert("rate" + order.rate);
    //     // alert("size" + Size);
    // }, [length]);

    function send() {
        if (Date.parse(orderDateFrom) < Date.parse(orderDateTo)) {
            debugger;
            fetch("http://localhost:3310/api/Orders/Post?Size=" + Size, { method: "post", headers: { 'Content-type': 'application/json' }, body: JSON.stringify(order) })
                .then(res => res.json())
                .then((res) => {
                    debugger;
                    if (res.Status) {
                        debugger;
                        setsach(res.Data.rate);
                        setStatusim(true);
                    }
                },
                    (err) => {
                        debugger;
                    })
        }
        else {
            alert("תאריך התחלה לא חוקי");
        }
    }

    return (
        <>
            <Nav></Nav>
            <form style={{ marginLeft: "45vw" }}>
                <h3 class="card-title title-up">הזמנה חדשה</h3>
                <br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker value={orderDateFrom} onChange={setOrderDateFrom} />
                    <br></br>
                    <DateTimePicker value={orderDateTo} onChange={setOrderDateTo} />
                </MuiPickersUtilsProvider>
                <br></br>
                <div style={{ marginRight: "20vw" }}>
                    <span>הבנתי: הוצאת הרכב באיחור גוררת קנס</span>
                    <CheckBox></CheckBox></div>
                <br></br>
                <div>לתשלום: {sach} ש"ח</div>
                <br></br>
                <Button variant="contained" color="primary" disabled={false} onClick={send}>אישור ההזמנה</Button>
                <SimpleSnackbar open={status} setOpen={setStatusim} message={" ההזמנה נכנסה למערכת"}></SimpleSnackbar>
            </form>
        </>
    );
})