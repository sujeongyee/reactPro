const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 제공 (React 빌드 파일)
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청에 대해 루트 HTML 파일 제공
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});