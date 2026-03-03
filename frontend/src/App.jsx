import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const fetchPosts = () => {
    fetch("http://localhost:8080/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, writer, content })
    }).then(() => {
      fetchPosts();
      setTitle(''); setWriter(''); setContent('');
    });
  };

  //  삭제 함수 추가
  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "DELETE",
      }).then(() => fetchPosts()); // 삭제 후 목록 새로고침
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1> 스터디 모집 게시판</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <input placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} style={{ display: 'block', width: '100%', marginBottom: '10px' }} required />
        <input placeholder="작성자" value={writer} onChange={e => setWriter(e.target.value)} style={{ display: 'block', width: '100%', marginBottom: '10px' }} required />
        <textarea placeholder="내용" value={content} onChange={e => setContent(e.target.value)} style={{ display: 'block', width: '100%', marginBottom: '10px' }} required />
        <button type="submit">등록하기</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'left', position: 'relative' }}>
            <h3>{post.title}</h3>
            <p><strong>작성자:</strong> {post.writer}</p>
            <p>{post.content}</p>
            {/*  삭제 버튼 추가 */}
            <button 
              onClick={() => handleDelete(post.id)} 
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App