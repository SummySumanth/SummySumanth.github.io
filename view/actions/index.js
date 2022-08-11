export const actionTypes = {
    SET_THEME: 'SET_THEME',
}

export const setTheme = theme => {
    Object.defineProperty(window, 'localStorage', { value: global.localStorage,configurable:true,enumerable:true,writable:true });
    const html = document.querySelector('html');
    html.dataset.theme = theme;

    const localStorage = window.localStorage;
    window.localStorage.removeItem("theme");
    // localStorage.setItem("theme", theme);

    return {
        type: actionTypes.SET_THEME,
        payload: theme
    }
}