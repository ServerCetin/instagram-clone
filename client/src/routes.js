import Home from "./components/home";
import PrivateRoute from "./components/privateRoute";
import MainLayout from "./components/mainLayout/layout";
import UserProfile from "./components/userProfile";
import ProfilePosts from "./components/userProfile/posts";
import ProfileTagged from "./components/userProfile/tagged";
import Register from "./components/Auth/register";
import AuthLayout from "./components/Auth/authLayout";
import Login from "./components/Auth/login";

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
                element: <UserProfile />,
                children: [
                    {
                        index: true,
                        element: <ProfilePosts />
                    },
                    {
                        path: 'tagged',
                        element: <ProfileTagged />
                    }
                ]
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
                element: <Register />
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