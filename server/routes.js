import Express from 'express';
import * as MainController from './controllers/mainController';
const router = Express.Router();

router.route('/test').get(MainController.getTestData);

module.exports = router;
