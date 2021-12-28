import React from 'react'
import { useSelector } from 'react-redux'
import { TeamCard } from './TeamCard'
import {Powerstats} from './Powerstats'
import { Appearance } from './Appearance'

export const Team = () => {

        const {team} = useSelector(state => state.hero)            
        
        return (
                <div>
                        { 
                                ( team.length!==0)
                                && (
                                        <div>
                                                <div className="container border pb-4">                                                        
                                                        <div className="divider ">            
                                                        
                                                                                    
                                                                <h1 className="text-center mt-4 mb-4 text-white">SELECTED TEAM </h1>     
                                                                {/* //row row-cols-1 row-cols-md-6 g-4                            */}
                                                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">                                
                                                                        {
                                                                                (!!team)
                                                                                ? team.map(hero=>(
                                                                                <TeamCard
                                                                                                key={hero.id}
                                                                                                {...hero}
                                                                                        />
                                                                                
                                                                                ))
                                                                                : <h1>no search results</h1>
                                                                        }
                                                                </div>
                                                        </div>
                                                </div>     

                                                <div>                                                        
                                                        <Powerstats/>                                        
                                                </div>  
                                                
                                                <div>                                                        
                                                        <Appearance/>                                        
                                                </div>                                   
                                        </div>  
                                )
                        }
                </div>
        )
}
