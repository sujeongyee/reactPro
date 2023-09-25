import React, { useState } from 'react';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e, index) => {
    // 파일 선택 시 호출되는 함수
    const files = [...selectedFiles];
    files[index] = e.target.files[0];
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // 파일 업로드 로직을 구현
    selectedFiles.forEach((file, index) => {
      if (file) {
        console.log(`선택한 파일 ${index + 1}:`, file);
        // 여기에서 파일 업로드 로직을 작성할 수 있습니다.
      }
    });
  };

  const handleAddFileInput = () => {
    // 새 파일 업로드 입력 필드 추가
    setSelectedFiles([...selectedFiles, null]);
  };

  const handleRemoveFileInput = (index) => {
    // 파일 업로드 입력 필드 삭제
    const files = [...selectedFiles];
    files.splice(index, 1);
    setSelectedFiles(files);
  };

  return (
    <div>
      {selectedFiles.map((file, index) => (
        <div key={index}>
          <input type="file" onChange={(e) => handleFileChange(e, index)} />
          <button onClick={() => handleRemoveFileInput(index)}>삭제</button>
        </div>
      ))}
      <button onClick={handleAddFileInput}>추가하기</button>
      <button onClick={handleUpload}>파일 업로드</button>
    </div>
  );
}

export default App;
