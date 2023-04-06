import React, { useEffect, useReducer } from "react";
import { reducer } from './Reducer';

const AppContext = React.createContext();

const initialState = {
    name: '',
    image: '',
    products : []
}

const API = 'https://fakestoreapi.com/products?limit=9';

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: 'HOME_UPDATE',
            payload: {
                name: 'Ritesh Goswami',
                image: './images/hero.svg'
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: 'ABOUT_UPDATE',
            payload: {
                name: 'Ritesh Goswami',
                image: './images/about1.svg'
            }
        })
    }

    let getServices = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type : 'GET_PRODUCTS', payload : data});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
       getServices(API);
    }, [])

    return <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider };