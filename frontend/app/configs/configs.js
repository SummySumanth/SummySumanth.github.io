const API_URL = process.env.NODE_ENV === 'production' ? 'https://summy.dev' : 'http://localhost:8080';
const ENV = process.env.NODE_ENV;

export { API_URL, ENV };
