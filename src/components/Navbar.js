import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'
import { removeHeroes } from '../actions/hero'

export const Navbar = () => {


         const dispatch = useDispatch()
        
        const handleLogout = () =>{
                dispatch(removeHeroes())
                dispatch(startLogout())
        }

        return (
                <div>
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-gradient  ">
                                        <div className="container  ">
                                                <ul className="navbar-nav ms-auto ">
                                                        <button 
                                                                className='btn btn-danger me-md-2'
                                                                onClick={handleLogout}
                                                                >
                                                                 <i className="fas fa-sign-out-alt"> </i>
                                                                 <span>  Salir</span>
                                                        </button> 
                                                </ul>
                                        </div>
                                </nav>
                </div>
        )
}

