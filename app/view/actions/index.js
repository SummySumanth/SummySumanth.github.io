export const actionTypes = {
    SET_THEME: 'SET_THEME',
}

Object.defineProperty(window, 'localStorage', { value: global.localStorage,configurable:true,enumerable:true,writable:true });
const localStorage = window.localStorage;

export const setTheme = theme => {
    const html = document.querySelector('html');
    html.dataset.theme = theme;
    
    localStorage.setItem("theme", theme);

    return {
        type: actionTypes.SET_THEME,
        payload: theme
    }
}