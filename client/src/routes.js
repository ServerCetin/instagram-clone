import Home from "./components/home";
import AuthLayout from "./components/notLoggedIn/authLayout";
import Login from "./components/notLoggedIn";
import PrivateRoute from "./components/privateRoute";
import MainLayout from "./components/mainLayout/layout";
import Signup from "./components/signup";
import UserProfile from "./components/userProfile";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: ':username',
                element: <UserProfile/>
            }
        ]
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
                path: ':username',
                element: <UserProfile />
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