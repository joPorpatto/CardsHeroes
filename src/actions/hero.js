import axios from "axios";
import Swal from "sweetalert2";
import { checkPowerTeam } from "../helpers/checkPowerTeam";
import { types } from "../types/types";


export const searchHero = ({name}) => {

        return async(dispatch)=>{

                await axios.get(`https://superheroapi.com/api/10222829918315897/search/${name}`)
                .then((response) =>{
                        
                        
                        dispatch({
                                type:  types.currentHero,
                                payload: response.data.results
                        })

                        dispatch({
                        type: types.loadingFinish
                        })                   
                        
                       
                        
                }).catch((err) =>{
                        dispatch({
                        type: types.loadingFinish
                        })                   
                        Swal.fire("error") 
                })
        }
}

export const loadingShow = ()=>{
        return (dispatch)=>{
                dispatch({
                        type: types.loading
                })
        }
}


export const addHero = (hero,team) => {
        return (dispatch) =>{
               
                

                const goodsHeroes = team.filter((h) =>{
                        return (h.biography.alignment==="good")
                })
                 const badsHeroes = team.filter((h) =>{
                        return (h.biography.alignment==="bad")
                })
       

                if (team.length <= 5) {

                        
                                if (hero.biography.alignment==="good") {

                                        if (goodsHeroes.length<=2) {
                                                checkPowerTeam(hero)
                                                Swal.fire('Agregado al equipo!', '', 'success')
                                                dispatch({
                                                type: types.teamHero,
                                                payload:  hero                              
                                                })   


                                                
                                        }else{
                                                Swal.fire("cantidad de buenos en equipo completo")   
                                        }
                                        
                                } else{

                                        if (badsHeroes.length<=2) {
                                                checkPowerTeam(hero)
                                                Swal.fire('Agregado al equipo!', '', 'success')
                                                dispatch({
                                                type: types.teamHero,
                                                payload: hero                              
                                                })     
                                              
                                        }else{
                                                Swal.fire("cantidad de malos en equipo completo")
                                        }

                                }     

                        

                } else{ Swal.fire("Equipo completo")}  
        
        }
}

export const removeHeroes = ()=> {
        return(dispatch)=>{
                dispatch({
                        type: types.removeHeros
                })
                
        }
}

export  const deleteHero = (hero)=>{
        return(dispatch)=>{
                checkPowerTeam(hero)
                dispatch({
                        type: types.deleteHero,
                        payload: hero
                })
        }
        
}


export  const heightSum = (hero)=>{
        return(dispatch)=>{              

                const h2=Number(hero.appearance.height[1].slice(0,3))
                if (Number(h2)) {                        
        
                        dispatch({
                                type: types.heightSum,
                                payload: h2
                        })
                        
                }
        }
        
}

export  const heightRes = (hero)=>{
        return(dispatch)=>{

                const h2=Number(hero.appearance.height[1].slice(0,3))
                if (Number(h2)) { 

        
                        dispatch({
                                type: types.heightRes,
                                payload: h2
                        })
                        
                }
        }
        
}

export  const weightSum = (hero)=>{
        return(dispatch)=>{              

                const h2=Number(hero.appearance.weight[0].slice(0,3))
                if (Number(h2)) {                        
        
                        dispatch({
                                type: types.weightSum,
                                payload: h2
                        })
                        
                }
        }
        
}
export  const weightRes = (hero)=>{
        return(dispatch)=>{              

                const h2=Number(hero.appearance.weight[0].slice(0,3))
                if (Number(h2)) {                        
        
                        dispatch({
                                type: types.weightRes,
                                payload: h2
                        })
                        
                }
        }
        
}





