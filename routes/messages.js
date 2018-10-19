const express = require('express');
// mergeParams will allows to get access to the id inside of his router
const router = express.Router({ mergeParams: true });

const { createMessage } = require('../handlers/messages')

router.route('/').post(createMessage);

module.exports = router;