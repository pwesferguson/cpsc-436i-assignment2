const express = require("express");
const router = express.Router();

const messages = [
    {
        id: 1,
        text: "golly",
        timestamp: "07:20:50 GMT-0700 (Pacific Daylight Time)",
        username: "paidActor"
    },
    {
        id: 2,
        text: "this site sure is swell",
        timestamp: "07:20:59 GMT-0700 (Pacific Daylight Time)",
        username: "paidActor"
    },
    {
        id: 3,
        text: "happy birthday john",
        timestamp: "07:21:50 GMT-0700 (Pacific Daylight Time)",
        username: "HailinOnUrMom"
    },
    {
        id: 4,
        text: "YIKESSSSSSSSSSSSSSSSSS",
        timestamp: "11:11:34 GMT-0700 (Pacific Daylight Time)",
        username: "WU-DYNASTY"},
    {
        id: 5,
        text: "LMAOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        timestamp: "18:21:50 GMT-0700 (Pacific Daylight Time)",
        username: "sassy_sasquatch_sastrillo"
    }
]

let nextMessageID = messages[messages.length - 1].id + 1

router.get('/', function (req, res, next) {
    res.json({
        nextMessageID,
        messages});
});

router.post('/', function (req, res, next) {
    const message = req.body;
    messages.push(message);
    nextMessageID++;
});

router.delete('/:id', function (req, res, next) {
    const messageID = req.params.id;
    let messageIndex = 0;

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        if (message.id == messageID) {
            break;
        } 
        messageIndex++;
    }

    if (messageIndex === messages.length) {
        throw new Error('Message was not found');
    }
    
    messages.splice(messageIndex, 1);
});

module.exports = router;
