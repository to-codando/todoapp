import { lemeJs } from 'lemejs'
import { router } from './routes';
import { appMain } from './components/appMain'

const app = lemeJs({
  appMain,
  router,
});
  
app.init();
