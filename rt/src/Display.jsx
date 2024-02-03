import React from 'react'
import axios from "axios"
import reducer from './Redux/Reducer'
import {applyMiddleware, createStore} from 'redux'
import {thunk} from "redux-thunk"
import { showSuccess } from './Redux/Action'
import { showError } from './Redux/Action'
import { useState, useEffect } from 'react'

const store = createStore(reducer, applyMiddleware(thunk))

function fetchData(){
    return function (){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>store.dispatch(showSuccess(res.data)))
        .catch((error)=>store.dispatch(showError(error.message)))
    }
}


function Display() {
    const [state, setState] = useState([])
    useEffect(()=>store.subscribe(()=>setState  (store.getState().data)),[])
  return (
    <div>
        <button onClick={store.dispatch(fetchData)}>Fetch Data</button>
        <div>{state.map((item)=>{
            return(
                <div key = {item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                    <hr />
                </div>
            )
        })}
        {state.length > 0 && (
            <button onClick={()=>setState([])}>Close</button>
        )}
        </div>
    </div>
  )
}

export default Display