import Home from "./components/home";
import AuthLayout from "./components/notLoggedIn/authLayout";
import Login from "./components/notLoggedIn";
import PrivateRoute from "./components/privateRoute";
import Logout from "./components/logout";
import Signup from "./components/signup";

const routes = [
    {
        path: '/',
        element: <Home />,
        auth: true
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'logout',
                element: <Logout />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)