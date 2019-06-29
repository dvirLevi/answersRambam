// שימוש בספריית אקספרס
const express = require('express');
// יצירת אינסטנס לספרייה
const app = express();
// ספרייה שנותנת גישה לשרת גם מחוצה לו
var cors = require('cors');
// ספרייה שקוראת json שמגיע מ body הקליינט
const bodyParser = require('body-parser');
// ספרייה שיוצרת id
// const uuidv1 = require('uuid/v1');


// הגדרת השימוש בספריות
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use('/', express.static('client/dist'))


// let collection;
// async function connectDB() {
// const url = process.env.NONGO_URI || 'mongodb://localhost:27017';
// const connection = await mongo.connect(url);
// const db = connection.db('ginAppDB');
// collection = db.collection('ginAppCOL');
// };
// connectDB()

const posts = require('./routes/api/posts');
app.use('/api/posts', posts)

app.listen(process.env.PORT || 8000, () => {
    console.log('listen...')
})

