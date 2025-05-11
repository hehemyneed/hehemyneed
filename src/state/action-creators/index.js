export const ToggleMode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'mode-handler',
            payload: mode
        })
    }
};

export const MenuHandler = (isMenuOpened) => {
    return (dispatch) => {
        dispatch({
            type: 'menu-handler',
            payload: isMenuOpened
        })
    }
};

export const AboutHandler = (isAboutOpened) => {
    return (dispatch) => {
        dispatch({
            type: 'about-handler',
            payload: isAboutOpened
        })
    }
};

