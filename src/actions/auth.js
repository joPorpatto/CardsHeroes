import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { types } from "../types/types";


export const startLoginEmailPassw = ({email, password}) => {
        return (dispatch) =>{
                const auth = getAuth();
                signInWithEmailAndPassword(auth,email,password )
                .then(  ({user}) => {
                        dispatch({type: types.login});
                        dispatch({type: types.loadingFinish}) 
                        })
                        .catch((err)=> {
                                dispatch({type: types.loadingFinish})
                                Swal.fire('Contraseña o Password incorrectos', 'error')

                        });
        }
}

export const startLogout = () => {
        return async (dispatch) => {     
                const auth = getAuth();
                await auth.signOut();        
                dispatch( logout() );
        }
};


export const logout = () => ({
        type: types.logout,
})