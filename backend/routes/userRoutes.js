import express from 'express';
import { authUser ,getUser,getUserProfile,registerUser,updateUserProfile,DeleteUser,getUserById,updateUser} from '../controller/usercontroller.js';

import  { protect,admin } from '../middleware/authMidleware.js'


const router = express.Router();

router.route('/').post(registerUser).get(protect,admin,getUser)
router.post('/login',authUser);
router
      .route('/profile')
      .get(protect,getUserProfile)
      .put(protect,updateUserProfile);
router.route('/:id').delete(protect,admin,DeleteUser)
                    .get(protect,admin,getUserById)
                    .put(protect,admin,updateUser)


export default  router;