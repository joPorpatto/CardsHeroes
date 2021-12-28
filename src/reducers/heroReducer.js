import { types } from "../types/types";


const initialState ={
        
        team: [],
        current: [],
        powerstats: {
                intelligence:0,
                strength: 0,
                speed: 0,
                durability: 0,
                power: 0,
                combat: 0,
        },
        height: 0,
        weight:0,
        loading: false,

}




export const heroReducer = (state=initialState, action) =>{
        switch (action.type) {
                
                case types.loading:
                        return {
                                ...state,
                                loading: true

                        }
                case types.loadingFinish:
                        return {
                                ...state,
                                loading: false

                        }
                
                case types.teamHero:
                        return {
                                ...state,
                                team: [...state.team,action.payload ],    
                                powerstats:{
                                        intelligence:
                                                state.powerstats.intelligence + Number(action.payload.powerstats.intelligence),
                                                strength: state.powerstats.strength + Number(action.payload.powerstats.strength),
                                                speed: state.powerstats.speed + Number(action.payload.powerstats.speed),
                                                durability:state.powerstats.durability + Number(action.payload.powerstats.durability),
                                                power: state.powerstats.power + Number(action.payload.powerstats.power),
                                                combat: state.powerstats.combat + Number(action.payload.powerstats.combat),
                                }  

                        }         
                case types.heightSum:
                        return {
                                ...state,
                                height: state.height + action.payload
                        }  
                case types.heightRes:
                        return{
                                ...state,
                                height: state.height - action.payload
                        }  
                          
                case types.weightSum:
                        return {
                                ...state,
                                weight: state.weight + action.payload
                        }  
                case types.weightRes:
                        return{
                                ...state,
                                weight: state.weight - action.payload
                        }                     
                        
                 case types.currentHero:
                        return {
                                ...state,
                                current: action.payload,
                                
                        }  
                case types.removeHeros:
                        return {
                                ...initialState
                        }    
                case types.deleteHero:
                        
                        return {
                                ...state,
                                team: state.team.filter(her => her.id !== action.payload.id ),  
                                powerstats:{
                                        intelligence:
                                                state.powerstats.intelligence - Number(action.payload.powerstats.intelligence),
                                                strength: state.powerstats.strength - Number(action.payload.powerstats.strength),
                                                speed: state.powerstats.speed - Number(action.payload.powerstats.speed),
                                                durability:
                                                state.powerstats.durability - Number(action.payload.powerstats.durability),
                                                power: state.powerstats.power - Number(action.payload.powerstats.power),
                                                combat: state.powerstats.combat - Number(action.payload.powerstats.combat)
                                }    
                        }      
                        
                default:
                        return state;
        }

}