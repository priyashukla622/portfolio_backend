import express from 'express';
import {addPortfolio} from '../controllers/addData.js';
import {getHome, getAbout, getEducation, getSkills, getProjects, getAllData} from '../controllers/getData.js';

const router=express.Router();

router.post("/addData", addPortfolio);
router.get("/getHome", getHome);
router.get("/getAbout", getAbout);
router.get("/getEducation", getEducation);
router.get("/getSkills", getSkills);
router.get("/getProjects", getProjects);
router.get("/getAllData",getAllData)

export default router;