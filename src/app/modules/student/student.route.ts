import express from 'express';

const router = express.Router();


//will call controller function
router.post('/create-student');

export const studentRoutes = router; //akhanee router jehetu akta nijei object tai akhanee r object akaree pathatee hobe na.........