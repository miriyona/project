import ComboBox from './ComboBox';
import React, { useState, useRef, cloneElement } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetId, SetNumberPlate, SetPassword,SetUserName,SetUserId,SetSize } from './Action';

function mapStateToProps(state) {
    return {
        Name: state.Name,
        Password: state.Password,
        Id: state.Id,
        NumberPlate:state.NumberPlate,
        Plate:state.Plate,
        UserId:state.userId,
        Size:state.size
    };
}

export default connect(mapStateToProps)(function Card(props) {
    const { Name, Password,NumberPlate, Id,Plate,UserId,Size, dispatch } = props;
    const [Client, setClient] = useState({ Name: Name, Password: Password, NumberPlate:NumberPlate, Id:Id,Plate:Plate });
    const [move, setMove]=useState("/makeAccount");
    var reg = /^\d+$/;
    function handleChangeParams(event, prop) {
        setStore(event, prop);
        var uClient = { ...Client };
        uClient[prop] = event.target.value;
        setClient(uClient);
    }
    function setStore(event, prop) {
        switch (prop) {
            case 'Name':
                dispatch(SetUserName(event.target.value))
                break;
            case 'Password':
                dispatch(SetPassword(event.target.value))
                break;
            case 'Id':
                dispatch(SetId(event.target.value))
                break;
            default:
                break;
        }
    }
    function addClient() {
        if (Name==""||Password==""||Id==""||Plate=="") {
            alert("אחד מהפרטים חסר!");
        }
        else{
            var cloneClient={...Client};
            cloneClient.NumberPlate=NumberPlate;
            setClient(cloneClient);
            debugger;
        fetch("http://localhost:3310/api/User", { method: "post", headers: { 'Content-type': 'application/json' }, body: JSON.stringify(cloneClient) })
            .then(res => res.json())
            .then((res) => {
                debugger;
                if (res.Status) {
                    dispatch(SetUserId(res.Data.UserId));
                    dispatch(SetSize(res.Data.Size))
                    setMove("/rules");
                }
            },
                (err) => {
                    debugger;
                })
    }}

    return (
        <div class="row">
            <div class="card card-signup" data-background-color="orange">
                <form class="form" method="" action="">
                    <div class="card-header text-center">
                        <h3 class="card-title title-up">רישום</h3>
                    </div>
                    <div class="card-body">
                        <div class="input-group no-border">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="now-ui-icons users_circle-08"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="שם משתמש" required ={true} title={"enter name"} value={Client.Name} onChange={(e) => handleChangeParams(e, 'Name')} />
                        </div>
                        <div class="input-group no-border">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="now-ui-icons ui-1_lock-circle-open"></i>
                                </span>
                            </div>
                            <input type="text" placeholder="סיסמא" class="form-control"required ={true} value={Client.Password} onChange={(e) => handleChangeParams(e, 'Password')} />
                        </div>
                        <div class="input-group no-border">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="now-ui-icons transportation_bus-front-12"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="מספר רכב"required ={true} value={Client.Id} onChange={(e) => handleChangeParams(e, 'Id')} onBlur={(e)=>{if(!reg.test(e.target.value)||e.target.value.length<7||e.target.value.length>8){alert("המספר רכב לא תקין"); e.target.value=""}}}/>
                        </div>
                        <ComboBox></ComboBox>
                    </div>
                    <div class="card-footer text-center">
                        <Link to={move} class="btn btn-neutral btn-round btn-lg" onClick={addClient}>כניסה</Link>
                    </div>
                </form>
            </div>
        </div>
    );
})