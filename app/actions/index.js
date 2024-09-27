export const actionTypes = {
  SET_THEME: 'SET_THEME',
};
if (typeof global === 'undefined') {
  window.global = window;
}

Object.defineProperty(window, 'localStorage', {
  value: global.localStorage, configurable: true, enumerable: true, writable: true,
});
const { localStorage } = window;

export const setTheme = (theme) => {
  const html = document.querySelector('html');
  html.dataset.theme = theme;

  localStorage.setItem('theme', theme);

  return {
    type: actionTypes.SET_THEME,
    payload: theme,
  };
};
