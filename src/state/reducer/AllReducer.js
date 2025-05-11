export const mode = (state = 'dark', action) => {
    if(action.type === 'mode-handler')
        return action.payload;
    else 
        return state;
}

export const menu = (state = false, action) => {
    if(action.type === 'menu-handler')
        return action.payload;
    else 
        return state;
}

export const about = (state = false, action) => {
    if(action.type === 'about-handler') 
        return action.payload;
    else 
        return state;
}

