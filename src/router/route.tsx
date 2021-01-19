import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

const routes = [
  {
    path: '/',
    component: PageOne,
    exact: true
  },
  {
    path: '/PageTwo',
    component: PageTwo
  },
]
export default routes;