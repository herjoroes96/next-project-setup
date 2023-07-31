//Import plugins
import cookies from 'js-cookie'

/* COOKIES AND LOCALSTORAGE */

export const storeToken = (token) => {
    cookies.set('access_token', token, { expires: 1 })
}

export const getToken = () => {
    return cookies.get('access_token')
}
