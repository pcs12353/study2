import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]); // 데이터를 담을 바구니

  // 💡 리액트가 켜질 때 백엔드에서 데이터를 가져오는 마법의 코드
  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📢 실시간 스터디 모집 게시판</h1>
      <p style={{ color: 'blue' }}>데이터 출처: 백엔드 서버(Java 21)</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
            <h2>{post.title}</h2>
            <p>작성자: {post.writer}</p>
            <div style={{ display: 'flex', gap: '5px' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: '#f0f0f0', padding: '4px 8px', borderRadius: '4px' }}>
                  #{tag}
                </span>
              ))}
            </div>
            <button style={{ marginTop: '15px' }} onClick={() => alert('신청 완료!')}>신청하기</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App