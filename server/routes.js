import Express from 'express';
import * as MainController from './controllers/mainController';
const router = Express.Router();

router.route('/employees').get(MainController.getEmployeeData);

module.exports = router;
