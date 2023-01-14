import React from 'react'
import { useState } from 'react'
import { login, logout, store } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

    const [newUserName, setNewUserName] = useState("");
    const username = useSelector((state : any) => 
        state.user.value.username
    )
    const dispatch = useDispatch();

  return (
    <div><input onChange={(e) => {setNewUserName(e.target.value)}}/><button onClick={() => dispatch(login({username: newUserName}))}>Login</button><button>Logout</button>
    {username}
    </div>
  )
}
