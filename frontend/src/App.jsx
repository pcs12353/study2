import { useState } from 'react'
import './App.css'

function App() {
  // 1. 가짜 데이터 (나중에 스프링 부트랑 연결할 부분)
  const [posts] = useState([
    { id: 1, title: '🚀 스프링 부트 기초 스터디', tags: ['Java', 'Spring'], writer: '천수', status: '모집중' },
    { id: 2, title: '⚛️ 리액트 초보 프로젝트 팀원', tags: ['React', 'Frontend'], writer: '김코딩', status: '모집중' },
    { id: 3, title: '📝 정보처리기사 2주 완성반', tags: ['자격증', 'CS'], writer: '이합격', status: '마감' },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 상단 제목 */}
      <h1>📢 스터디 모집 게시판</h1>
      <button style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>글쓰기</button>

      {/* 게시글 목록 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            
            {/* 제목과 상태 뱃지 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{post.title}</h2>
              <span style={{ 
                backgroundColor: post.status === '모집중' ? '#e6f4ea' : '#f1f3f4',
                color: post.status === '모집중' ? '#1e8e3e' : '#5f6368',
                padding: '5px 10px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem'
              }}>
                {post.status}
              </span>
            </div>

            {/* 작성자 및 태그 */}
            <p style={{ margin: '5px 0', color: '#666' }}>작성자: {post.writer}</p>
            <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: '#f0f0f0', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: '#333' }}>
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* 신청 버튼 */}
            <button 
              onClick={() => alert(`'${post.title}'에 신청했습니다!`)}
              style={{ marginTop: '15px', padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              신청하기
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App