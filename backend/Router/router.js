import { Router} from 'express';
import verifyFirebaseToken from '../middleware/authMiddleware.js';
import { saveFirebaseUserController, sendEmailOtpController, verifyOtpController } from '../Controllers/userController.js';



const router = Router();

router.post('/firebaseSave',verifyFirebaseToken,saveFirebaseUserController);

router.post('/sendotp',sendEmailOtpController);
router.post('/verifyotp',verifyOtpController);



export default router;