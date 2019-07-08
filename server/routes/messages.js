const express = require("express");
const router = express.Router();
const dbExports = require("../db.js");
const getMessagesCollection = dbExports.getMessagesCollection;

let localMessages = [];
let nextMessageID;

router.get('/', function (req, res, next) {
    const messagesCollection = getMessagesCollection();

    messagesCollection.find({}).toArray((err, docs) => {
        if (!docs) throw new Error("Could not retrieve messages.")

        localMessages = docs;
        nextMessageID = localMessages[localMessages.length - 1].id + 1;

        res.json({
            nextMessageID,
            messages: localMessages
        });
    })

});

router.post('/', function (req, res, next) {
    const message = req.body;
    const messagesCollection = getMessagesCollection();

    messagesCollection.insertOne(message, (err) => {
        if (err) console.warn("Warning: was not able to save message. Please refresh and try again.");
    });

    localMessages.push(message);
    nextMessageID++;
});

router.delete('/:id', function (req, res, next) {
    const messageID = parseInt(req.params.id);
    let messageIndex = 0;
    const messagesCollection = getMessagesCollection();

    messagesCollection.deleteOne({ id: messageID }, (err) => {
        if (err) {
            console.warn("Warning: was not able to delete message. Please refresh and try again.");
            console.log(err);
        } else {
            console.log("delete completed");
        }
    });

    for (let i = 0; i < localMessages.length; i++) {
        const message = localMessages[i];
        if (message.id === messageID) {
            break;
        }
        messageIndex++;
    }

    if (messageIndex === localMessages.length) {
        throw new Error('Message was not found');
    }

    localMessages.splice(messageIndex, 1);
});

router.post('/edit/:id', function (req, res, next) {
    const messageID = req.body.id;
    const messagesCollection = getMessagesCollection();

    messagesCollection.findOneAndUpdate(
        { id: req.body._id },
        { $set: { text: req.body.text } }, 
        (err) => {
            if (err) {
                console.warn("Warning: was not able to edit message. Please refresh and try again.");
                console.log(err);
            } else {
                console.log("edit completed");
            }
            
        });

    for (let i = 0; i < localMessages.length; i++) {
        if (localMessages[i].id == messageID) {
            localMessages[i] = req.body;
            return;
        }
    }
    throw new Error("could not find message to edit");
});

module.exports = router;
