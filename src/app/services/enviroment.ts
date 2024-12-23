export const environment = {
    server: {
        apiUrl: 'http://vkl.vinhdd.io.vn:8080/',
    },
    path: {
        auth: {
            LOGIN: 'login',
            REGISTER: 'register',
            GET_CART: 'cart',
            ADD_CART: 'cart/add'
        },
        product: {
            GET_DETAIL: 'products/',
            GET_CATEGORY: 'products/category/',
            CHECK_OUT: 'orders/checkout',
            CREATE_PRODUCT: 'products'
        },
        category: {
            GET_CATEGORY: 'categories'
        },
        admin: {
            GET_USERS: 'admin/users'
        }
    }
};