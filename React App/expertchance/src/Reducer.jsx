export const reducer = (state, action) => {
    
    if(action.type == 'HOME_UPDATE'){
        return {
            ...state,
            name : action.payload.name,
            image : action.payload.image
        }
    }

    if(action.type == 'ABOUT_UPDATE'){
        return {
            ...state,
            name : action.payload.name,
            image : action.payload.image
        }
    }

    if(action.type == 'GET_PRODUCTS'){
        return {
            ...state,
            products : action.payload
        }
    }
  
}