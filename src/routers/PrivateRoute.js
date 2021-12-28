import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';


export const PrivateRoute = ({isAuthenticated, element,}) => {
        
        return (
                (isAuthenticated)
                        ? (element)
                        : (<Navigate to="/login"/>)
        )
}

PrivateRoute.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        element: PropTypes.object.isRequired
}