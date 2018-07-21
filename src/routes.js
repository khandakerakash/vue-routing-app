import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import Home from './components/Home'

export const routes = [
    { path: '/about', component: About},
    { path: '/contact', component: Contact},
    { path: '/blog', component: Blog},
    { path: '', component: Home}
]