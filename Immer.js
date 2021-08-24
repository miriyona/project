import produce from 'immer';
import React,{ useState } from 'react';

export default function Immer() {
    const [client,setClient]=useState({
        Name:"",
        Password:"",
        NumberPlate:"",
        Plate:0,
        Id:""
    });
}