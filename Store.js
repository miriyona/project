import React, { useState } from 'react';
import produce from 'immer';
import { createStore } from 'redux';

const initState = {
    Name: "",
    Password: "",
    Plate: "",
    NumberPlate: "",
    Id: "",
    userId: 2,
    size: "",
    carToUser: ""
    //History:[null]
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            state.Name = action.payload;
            break;
        case 'SET_NUMBER_PLATE': {
            debugger;
            state.NumberPlate = action.payload;
            break;
        }
        case 'SET_PLATE': {
            debugger;
            state.Plate = action.payload;
            break;
        }
        case 'SET_ID':
            state.Id = action.payload;
            break;
        case 'SET_PASSWORD':
            state.Password = action.payload;
            break;
        case 'SET_USER_ID':
            state.userId = action.payload;
            break;
        case 'SET_SIZE':
            state.size = action.payload;
            break;
        case 'SET_CAR_TO_USER':
            state.carToUser = action.payload;
            break;
        default:
            break;
    }
}, initState)

const Store = createStore(reducer);
window.Store = Store;
export default Store;