import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {
    const { user } = useContext( AuthContext );

    //la documentacion recomienda usar redirect instead of useNavigate veremos que pasas despues 
    const navigate = useNavigate();
    const onLogout = () => {
       navigate('/login',  {
        //esto hace que remplazce la ruta qne que se encuentra
        replace: true 
       });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    {/* <NavLink
                        className={({ isActive }) =>
                            `nav-link nav-item ${isActive ? "active" : ""}`
                        }
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}
                    <NavLink
                        className={({ isActive }) =>
                            `nav-link nav-item ${isActive ? "active" : ""}`
                        }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className=' nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button
                        className='nav-item nav-link btn text-primary'
                        onClick={onLogout}
                    >
                        Logout
                    </button>


                    {/* <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}