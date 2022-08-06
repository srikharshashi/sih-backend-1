const router = require("express").Router();

//ROUTE IMPORTS
const passFailRoute = require('./pass-fail-historic');
const literacyRoute = require('./literacy-historic');
const dropoutRoute = require('./dropouts-historic');



//ASSIGNING APPROPRIATE ROUTES
router.use("/pass-fail-rate", passFailRoute);
router.use("/literacy-rate", literacyRoute);
router.use("/dropout-rate", dropoutRoute);


module.exports = router;



