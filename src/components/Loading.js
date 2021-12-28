import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
        
        
        const {loading} = useSelector(state => state.hero)
        return (
                <div>
                        {(loading)&&
                        <div className="container text-center mt-4">
                                
                                <div className="spinner-border " role="status">
                                        <span className="visually-hidden">Loading...</span>
                                        </div>
                                </div>
                        }
                </div>
        )
}
