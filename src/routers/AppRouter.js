import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
import { HeroeInfo } from '../components/hero/HeroeInfo';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import '../firebaseConfig';
import { useState } from 'react';
import { types } from '../types/types';




export const AppRouter = () => {

        const dispatch = useDispatch()
        const [IsLogginIn, setIsLogginIn] = useState(false)        

        useEffect(() => {
                const auth = getAuth();
                onAuthStateChanged(auth,  async (user) =>{
                        if (user?.uid) {
                                dispatch({type: types.login});
                                setIsLogginIn(true)
                        }else {                                
                                setIsLogginIn(false)
                        }
                })
        }, [dispatch] )
        return (
                
                <Router>
                        <Routes>
                                <Route
                                        path='/*'
                                        element={
                                                <PrivateRoute
                                                        isAuthenticated={IsLogginIn}
                                                        element={<HomeScreen/>}
                                                />
                                        }
                                />

                                <Route
                                        path='/login'
                                         element={
                                                <PublicRoute
                                                        isAuthenticated={IsLogginIn}
                                                        element={<LoginScreen/>}
                                                />
                                        }
                                />
                                <Route
                                        path='/home/:heroId'
                                         element={
                                                <PrivateRoute
                                                        isAuthenticated={IsLogginIn}
                                                        element={<HeroeInfo/>}
                                                />
                                        }
                                />
                        </Routes>
                        
                </Router>

        )
}
