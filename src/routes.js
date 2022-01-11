import { routerFactory } from 'lemejs'
import { appProjects } from './components/appProjects'
import { appTasks } from './components/appTasks'
import { appNotFound } from './components/appNotFound'

export const router = routerFactory()

router.add(/^#\/$/, appProjects, [])
router.add(/^#\/projects\/\w{1,}$/, appTasks, ['id'])
router.add(/^#\/404$/, appNotFound, []) 

router.set({ initial: '#/'})
router.set({ default: '#/404'})