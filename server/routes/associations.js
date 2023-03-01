const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllAssociation, addAssociation, getOneAssociation,updateOneAssociation ,deleteOneAssociation} = require('../controllers/association');

/// Association ROUTES ///

//GET request to fetch all associations. NOTE This must come before route for id.
router.get('/getAllAssociations', getAllAssociation);
// GET request for one user.
router.get('/:id', getOneAssociation);
// POST request for creating a user.
router.post('/add', addAssociation);
router.put('/updateAssociation/:id', updateOneAssociation);
router.delete('/deleteAssociation/:id',deleteOneAssociation)


module.exports = router;