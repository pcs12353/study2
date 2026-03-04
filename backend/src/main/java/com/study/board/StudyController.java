package com.study.board;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class StudyController {

    //  (CORS 설정)
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/api/posts")
    public List<Map<String, Object>> getPosts() {
        
        // 1. 첫 번째 게시글
        Map<String, Object> post1 = new HashMap<>();
        post1.put("id", 1);
        post1.put("title", "🚀 스프링 부트 기초 스터디 (백엔드에서 보냄)");
        post1.put("writer", "천수");
        post1.put("tags", List.of("Java", "Spring"));
        post1.put("status", "모집중");

        // 2. 두 번째 게시글
        Map<String, Object> post2 = new HashMap<>();
        post2.put("id", 2);
        post2.put("title", "⚛️ 리액트 초보 프로젝트 (백엔드 데이터)");
        post2.put("writer", "김코딩");
        post2.put("tags", List.of("React", "Frontend"));
        post2.put("status", "모집중");

        // 3. 게시글 삭제하기 (삭제)
    @DeleteMapping("/{id}") // 주소 뒤에 붙는 숫자가 글 번호(ID)가 됩니다.
    public void deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
    }
    // 4. 게시글 수정하기 (수정)
    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post postDetails) {
        // 1. 기존 글을 찾아서
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 글이 없습니다."));
        
        // 2. 내용을 고치고 (이 부분은 Post 클래스에 Setter가 필요하지만, 간단히 새로 저장하는 방식으로 구현합니다)
        // 
        return postRepository.save(new Post(postDetails.getTitle(), postDetails.getWriter(), postDetails.getContent()));
    }
        // 리스트에 담아서 리턴 (이게 JSON으로 변해서 날아감)
        return List.of(post1, post2);
    }
}