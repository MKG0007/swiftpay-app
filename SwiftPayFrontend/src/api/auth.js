import api from './axios'
//sari request ko handle krne ke liye ek object banaya hai jisme register aur login
// ke functions hai jo api.post method ka use krte hai. ye functions data ko parameter 
// ke roop me lete hai aur usse backend API endpoints par bhejte hai.
export const authAPI = {
  register: (data) => api.post('/api/auth/register', data),
  login: (data) => api.post('/api/auth/login', data),
}
