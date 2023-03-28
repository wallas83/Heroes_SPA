import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search}  = useLocation();
   // modificar por que se renderiza se puede usar useEffect o usememo 
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return ( logged)
        ? children
        : <Navigate to= '/login'/>
    
}
