package com.study.board;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // 
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String writer;
    private String content;

    // 기본 생성자 (필수)
    public Post() {}

    // 데이터를 넣을 때 쓸 생성자
    public Post(String title, String writer, String content) {
        this.title = title;
        this.writer = writer;
        this.content = content;
    }

    // Getter들 (데이터를 꺼낼 때 사용)
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getWriter() { return writer; }
    public String getContent() { return content; }
}