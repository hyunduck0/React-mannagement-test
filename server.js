const express = require('express')
const bodyPaser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended:true}));

app.get('/api/customers', (req, res) =>{
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김현덕',
        'birthday': '801222',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동',
        'birthday': '961222',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이순신',
        'birthday': '961222',
        'gender':'남자',
        'job':'프로그래머'
      }
      ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));