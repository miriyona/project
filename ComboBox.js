import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { SetNumberPlate, SetPlate } from './Action';

function mapStateToProps(state) {
  return {
    NumberPlate: state.NumberPlate,
    Plate: state.Plate
  };
}


export default connect(mapStateToProps)(function ComboBox(props) {
  const { NumberPlate, Plate, dispatch } = props;
  const [allCars, SetAllCars] = useState([]);
  const [carsItem, setCarsItem] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3310/api/Cars", { method: "get", headers: { 'Content-type': 'application/json' }, })
      .then(res => res.json())
      .then((res) => {
        SetAllCars(res.Data);
      },
        (err) => {
          debugger;
        })
  }, []);

  useEffect(function (params) {
    var arr = [];
    allCars.forEach((item) => arr.push({ title: item.name + " " + item.model, id: item.id }));
    setCarsItem(arr);
  }, [allCars])

  return (
    <Autocomplete
      id="combo-box-demo"
      options={carsItem}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="דגם הרכב" variant="outlined" />}
      onChange={(e, newValue) => {
        debugger;
        // debugger;
        // console.log(e);
        var x = allCars.forEach((x) => x.title == e.target.value);
        // alert(newValue.id);
        // alert(newValue.title);
        dispatch(SetNumberPlate(newValue.id));
        dispatch(SetPlate(newValue.title));
      }}
    />
  );
})