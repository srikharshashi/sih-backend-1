const router = require('express').Router();
// require
const je = [
    { State: "an", val: 0.34 },
    { State: "ap", val: 0.46 },
    { State: "ar", val: 0.53 },
    { State: "as", val: 0.49 },
    { State: "br", val: 0.55 },
    { State: "ch", val: 0.5 },
    { State: "ct", val: 0.54 },
    { State: "dn", val: 0.37 },
    { State: "dd", val: 0.36 },
    { State: "dl", val: 0.66 },
    { State: "ga", val: 0.36 },
    { State: "gj", val: 0.37 },
    { State: "hr", val: 0.35 },
    { State: "hp", val: 0.44 },
    { State: "jk", val: 0.58 },
    { State: "jh", val: 0.6 },
    { State: "ka", val: 0.57 },
    { State: "kl", val: 0.41 },
    { State: "ld", val: 0.42 },
    { State: "mp", val: 0.62 },
    { State: "mh", val: 0.56 },
    { State: "mn", val: 0.58 },
    { State: "ml", val: 0.56 },
    { State: "mz", val: 0.48 },
    { State: "nl", val: 0.64 },
    { State: "or", val: 0.54 },
    { State: "py", val: 0.35 },
    { State: "pb", val: 0.38 },
    { State: "rj", val: 0.36 },
    { State: "sk", val: 0.44 },
    { State: "tn", val: 0.49 },
    { State: "tg", val: 0.39 },
    { State: "tr", val: 0.4 },
    { State: "up", val: 0.4 },
    { State: "ut", val: 0.36 },
    { State: "wb", val: 0.51 },
  ];
router.post("/dropout", async (req, res) => {
    console.log("POST --> staticcc wise data");
    res.status(200).json(je)
});

module.exports = router;