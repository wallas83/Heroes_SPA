import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ( {children}) => {
    const { logged } = useContext( AuthContext);
    const local = localStorage.getItem('lastPath');
  return ( !logged )
        ? children
        : <Navigate to= {local}/>
}
