// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/test', (req, res) => {
//     console.log('/user 호출', +req);
// })


// app.get('/', function(req, res) {
//     console.log('---get방식이 구동되었습니다.---');
//     var text = '해리포터'; // 프론트에 보내는 메세지
//     res.send(text);
// });

// app.listen(3000);

//---------------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post("/post", (req, res) => {
//   // POST 요청에서 데이터 추출
//   const postData = req.body.data;

//   // 데이터를 처리하거나 필요한 작업 수행
//   // 이 예제에서는 데이터를 콘솔에 로깅합니다
//   console.log('Received data: ', postData);

//   // 클라이언트에 응답 보내기 (옵션)
//   res.json({ message: 'Data received successfully' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//=======================1104==========================
//community page list item 추가 코드

const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());

// 예시 데이터
const sampleData = [
  {
    title: 'Book 1',
    userName: 'User 1',
    like: 10,
    reple: 5,
  },
  {
    title: 'Book 2',
    userName: 'User 2',
    like: 15,
    reple: 8,
  },
  // {
  //   title: 'Book 3',
  //   userName: 'User 3',
  //   like: 3,
  //   reple: 45,
  // },
  // {
  //   title: 'Book 4',
  //   userName: 'User 4',
  //   like: 26,
  //   reple: 1,
  // },
  // 이하 추가 데이터
];

// 라우트 - 데이터 제공
app.get('/posts', (req, res) => {
  res.json(sampleData);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});