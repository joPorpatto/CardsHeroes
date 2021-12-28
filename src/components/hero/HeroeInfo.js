import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


export const HeroeInfo = () => {

        const {current} = useSelector(state => state.hero)
        const { heroId}= useParams()
        const heroFilter = current.filter( (heroes) =>(heroes.id===heroId))
        const hero = heroFilter[0]

        const funcionBack = (value) =>{                
                if ((value.slice(0,2)==0)) {
                        return "-"                        
                }else{return value}
        }


        
        
        return (
                <div className=" row justify-content-center mt-4 mb-4 ">
                        <div className="card hero-info ms-4  me-4"style={{width:"30rem"}} >
                                <div className="container mt-4 mb-4">
                                        <img src={hero.image.url} className=" mx-auto d-block" width="150" height="auto" alt={hero.name}/>

                                </div>
                                
                                <ul className="list-group ms-4 me-4    ">
                                        <li className="list-group-item list-group-item-primary "><b>Weight:</b>  {funcionBack(hero.appearance.weight[1])}</li>
                                        <li className="list-group-item list-group-item-primary"><b>Height:</b> {funcionBack(hero.appearance.height[1])}</li>
                                        <li className="list-group-item list-group-item-primary"><b>Names:</b> {hero.name}</li>
                                        <li className="list-group-item list-group-item-primary"><b>Aliases:</b> {hero.biography.aliases.map((alias)=>(
                                                <span key={alias}>{alias} - </span>
                                        ))}</li>

                                        <li className="list-group-item list-group-item-primary "><b>Eye color:</b> {hero.appearance["eye-color"]}</li>
                                        <li className="list-group-item list-group-item-primary"><b>Hair color:</b> {hero.appearance["hair-color"]}</li>
                                        <li className="list-group-item list-group-item-primary"><b>Work base:</b> {hero.work.base}</li>

                                </ul>
                                <div className="card-body mx-auto d-block">
                                        <Link className="text-white" to={`./home}`}>
                                                Return
                                         </Link>
                                </div>
                                
                        </div>
                </div>
        )
}
