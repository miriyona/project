import React, { useState, useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetId,SetCarToUser, SetNumberPlate, SetPassword, SetPlate, SetUserName,SetUserId,SetSize } from './Action';

function mapStateToProps(state) {
  return {
    Name: state.Name,
        Password: state.Password,
        Id: state.Id,
        NumberPlate:state.NumberPlate,
        Plate:state.Plate,
        UserId:state.userId,
        Size:state.size,
        CarToUser:state.carToUser
  };
}

export default connect(mapStateToProps)(function SignIn(props) {
  const { Name, Password,NumberPlate, Id,Plate,UserId,size,CarToUser, dispatch } = props;
  const [User, setUser] = useState({ Name: "", Password: "" });
  const [move, setMove]=useState("/");

  function handleChangeParams(event, prop) {
    var aUser = { ...User };
    aUser[prop] = event.target.value;
    setUser(aUser);
  }
  function enter() {
    if (User.Name!=""&&User.Password!="") {
      fetch("http://localhost:3310/api/User/FindUser", { method: "post", headers: { 'Content-type': 'application/json' }, body: JSON.stringify(User) })
            .then(res => res.json())
            .then((res) => {
                debugger;
                if (res.Status) {
                    dispatch(SetUserId(res.Data.UserId));
                    dispatch(SetUserName(res.Data.Name));
                    dispatch(SetPassword(res.Data.Password));
                    dispatch(SetNumberPlate(res.Data.NumberPlate));
                    dispatch(SetPlate(res.Data.Plate));
                    dispatch(SetId(res.Data.Id));
                    dispatch(SetSize(res.Data.Size));
                    dispatch(SetCarToUser(res.Data.CarToUser));
                    setMove("/enter");
                }
                else{
                  alert("שם המשתמש או הסיסמא אינם תקינים")
                }
            },
                (err) => {
                    debugger;
                })
    }
    else{
      alert("אחד מהפרטים חסרים");
    }
  }

  return (
    <div class="container">
      <div class="col-md-4 ml-auto mr-auto">
        <div class="card card-login " data-background-color="blue">
          <form class="form" method="" action="">
            <div class="card-header text-center">
            <br></br>
            <br></br>
              <h3 class="card-title title-up">התחברות</h3>
              <br></br>
            </div>
            <div class="card-body">
              <div class="input-group no-border input-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="now-ui-icons users_circle-08"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="שם משתמש" required="required" value={User.Name} onChange={(e) => handleChangeParams(e, 'Name')} />
              </div>
              <div class="input-group no-border input-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="now-ui-icons text_caps-small"></i>
                  </span>
                </div>
                <input type="text" placeholder="סיסמא" class="form-control" value={User.Password} onChange={(e) => handleChangeParams(e, 'Password')} />
              </div>
            </div>
            <h6>
              <Link to="/makeAccount" class="link">?אין לך חשבון עדיין</Link>
            </h6>
            <div class="card-footer text-center">
              <Link to={move} class="btn btn-neutral btn-round btn-lg "onClick={enter}>כניסה</Link>
              <div class="pull-left">

              </div>
            </div></form>
        </div>
      </div>
    </div>
  );
})