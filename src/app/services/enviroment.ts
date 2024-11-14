export const environment = {
    server: {
        apiUrl: 'http://192.168.100.100:8080/',
    },
    path: {
        auth: {
            GET_USER: '/user',
            LOGIN: '/user/login',
            REGISTER: '/user/register',
            FORGOT_PASSWORD: '/user/forgot-password',
            CONFIRM_OTP: '/user/confirm-otp',
            SEARCH_USER: '/user/search'
        },
        product: {
            GET_DETAIL: 'products/'
        }
    }
};