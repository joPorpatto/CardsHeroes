import React from 'react'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'


export const PublicRoute = ({ isAuthenticated, element }) =>{
        
        return (
                (!isAuthenticated)
                        ? (element)
                        :(<Navigate to= '/home' />)
        )
}

PublicRoute.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        element: PropTypes.object.isRequired
}