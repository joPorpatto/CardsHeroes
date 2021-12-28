import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  addHero, deleteHero, heightRes, heightSum, weightRes, weightSum } from '../../actions/hero'
import './style.css'

export const TeamCard = (hero) => {

        const {team} = useSelector(state => state.hero)

        const valuesPow = Object.values(hero.powerstats )
        const namesPow = Object.keys(hero.powerstats )        
        const dispatch = useDispatch()

   

        const handleDelete = (e)=>{
                e.preventDefault()
                dispatch(deleteHero(hero))
                dispatch(heightRes(hero))
                dispatch(weightRes(hero))

        }
        const handleAdd = (e) =>{
                e.preventDefault()
                dispatch(addHero(hero,team))
                dispatch(heightSum(hero,team))
                dispatch(weightSum(hero,team))
        }

        const heroIncluded = team.map((h) =>{
                        return h.id=== hero.id
                }) 
        
                      
        
        return (
                <div>
                        <div className="maincontainer mb-4 ">
                                <div className={heroIncluded.includes(true)? "thecard":""}>
                                        <div className="thefront ">

                                                <h1>{hero.name}</h1>
                                                <div className="container text-center ">

                                                <img className= "img-fluid  " 
                                                        src={hero.image.url} 
                                                        alt="hero.name"
                                                        width={heroIncluded.includes(true)? "180":"150"} 
                                                        height="auto"/>
                                                </div>     
                                                <div className={heroIncluded.includes(true)? "d-none":"d-grid  mx-auto mt-3"}>
                                                        <button 
                                                                type="button" 
                                                                className="btn  btn-primary "
                                                                onClick={handleAdd}
                                                                >
                                                                        Add
                                                        </button>

                                                       
                                                       

                                                </div>   
                                                <div className={heroIncluded.includes(true)?"d-none":"d-grid mx-auto "}>
                                                        <Link className="badge badge-info" to={`./home/${hero.id}`}>
                                                                        More info...
                                                                </Link>                                     
                                                
                                                </div>  
                                        
                                        </div>

                                                                                    
                                        
                  

                                        <div className={heroIncluded.includes(true)? "theback":"d-none"}>

                                                <h4>{hero.name}</h4>
                                                <p>{hero.biography.alignment}</p>

                                                  <div className="container mb-4   ">
                                                          <div className="row">

                                                                <dt>Powerstats</dt>
                                                                        {
                                                                                namesPow.map((name,i)=>(
                                                                                        <li   className='list-group' key={i}>
                                                                                                {name}: {(valuesPow[i]===0)?"null":valuesPow[i]}
                                                                                        </li>
                                                                                ))
                                                                        }
                                                          </div>
                                                  </div>
                                                
                                                <div className="container display-flex">

                                                        <button 
                                                                type="button" 
                                                                className="btn btn-outline-success "
                                                                onClick={handleDelete}
                                                                >
                                                                        Remove
                                                        </button>
                                                        
                                                        <Link className="badge badge-info" to={`./home/${hero.id}`}>
                                                                        More info
                                                        </Link>

                                                       
                                                        

                                                </div>                                              
                                        </div>
                                </div>
                        </div>                        
                </div>
        )
}

