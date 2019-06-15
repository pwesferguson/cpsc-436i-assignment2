const express = require("express");
const router = express.Router();

const testObject = [
    {
        id: 1,
        text: "golly",
        timestamp: "07:20:50 GMT-0700 (Pacific Daylight Time)",
        username: "paidActor"
    }
]

router.get('/', function (req, res, next) {
    res.header()
    res.json(testObject);
});

module.exports = router;
