const express = require('express');
const mongodb = require('mongodb');

const uuidv1 = require('uuid/v1');


const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsConection();
    let ansArr = await posts.findOne({name: 'answers'})
    res.send(ansArr.answers)
})
router.get('/image', async (req, res) => {
    const posts = await loadPostsConection();
    let ansArr = await posts.findOne({name: 'image'})
    res.send(ansArr.images)
})
router.post('/', async (req, res) => {
    const posts = await loadPostsConection();
    const userId = uuidv1();
    req.body.id = userId;
    await posts.updateOne({name: 'answers'}, {$push: {answers: {
        $each: [req.body],
        $position: 0
     } }});
    res.status(200).json('ok')
})
router.post('/image', async (req, res) => {
    const posts = await loadPostsConection();
    const userId = uuidv1();
    req.body.id = userId;
    await posts.updateOne({name: 'image'}, {$push: {images: {
        $each: [req.body],
        $position: 0
     } }});
    res.status(200).json('ok')
})




async function loadPostsConection() {
    const url = process.env.NONGO_URI || 'mongodb://localhost:27017';
    const client = await mongodb.MongoClient.connect(url, {
        useNewUrlParser: true
    });
    return client.db('answerRambam').collection('answers');
}



module.exports = router;