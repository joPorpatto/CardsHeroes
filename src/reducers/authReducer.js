import { types } from "../types/types";


const initialState ={
        active:false,
}

export const authReducer = (state={initialState}, action) =>{
        switch (action.type) {

                case types.login:
                        return {
                                ...state,
                                active:true,
                                
                        }
                case types.logout:
                return {
                        ...initialState
                }
                default:
                        return state;
        }

}