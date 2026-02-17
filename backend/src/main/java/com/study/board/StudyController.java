package com.study.board;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class StudyController {

    // 중요: 리액트(5173번 항구)가 문을 두드리면 열어줘라! (CORS 설정)
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

        // 리스트에 담아서 리턴 (이게 JSON으로 변해서 날아감)
        return List.of(post1, post2);
    }
}