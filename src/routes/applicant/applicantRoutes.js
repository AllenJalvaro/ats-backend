const express = require("express");
const router = express.Router();
const applicantController = require("../../controllers/applicant/applicantController")

//search for a list of applicants that matches search query and corresponding
//status, and position
router.get("/search", applicantController.searchApplicant);

//gets all applicants but limit to x. 
//eg., http://localhost:3000/applicants/pagination?page=1&limit=10
//Though this will work with http://localhost:3000/applicants/pagination
router.get("/pagination", applicantController.getAllApplicantsPagination);

//gets all applicants
router.get("/", applicantController.getAllApplicants)

//we will receive an object literal from the frontend that describes the filter
router.get("/filter", applicantController.getApplicantsFilter)

//gets a specific applicant
router.get("/:applicant_id", applicantController.getApplicant);



module.exports = router;