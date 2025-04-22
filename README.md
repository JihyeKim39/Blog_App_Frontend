
# 📝 Blog Web Application (Angular + Spring Boot + MySQL)

이 프로젝트는 **Angular**를 프론트엔드로, **Spring Boot**를 백엔드로, **MySQL**을 데이터베이스로 사용하는 **풀스택 블로그 웹 애플리케이션**입니다.  


## ⚙️ 기술 스택

- **Frontend**: Angular  
- **Backend**: Spring Boot  
- **Database**: MySQL  
- **IDE**: VS Code (Frontend), STS (Backend)  

---

## ✨ 주요 기능

### 🖋️ 블로그 작성 폼
- 이름, 사진, 본문(콘텐츠), 작성자 이름, 태그 입력 가능  
- 태그 추가 및 삭제 기능 제공  
- 반응형 UI 지원  

### 🏠 블로그 메인 페이지
- 게시물 카드에 **제목**, **사진**, **작성자**, **생성일**, **좋아요 수**, **조회 수** 표시  
- ‘내용 보기’ 버튼 클릭 시 **게시물 상세 페이지**로 이동  

### 📄 게시물 상세 페이지
- 해당 게시물의 상세 정보 출력  
- 좋아요 수, 조회 수 확인  
- 댓글 보기 및 작성 기능 포함  

### 📚 게시물 목록 페이지 (View All Posts)
- 전체 게시물을 한눈에 확인 가능  
- 상세 페이지 → 목록 페이지 간 쉬운 이동  

### 🔍 검색 기능
- 키워드 입력 → 관련 API 호출 → 검색 결과 표시  

---

## 🛠️ 설치 및 실행 방법

### 📁 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 🖥️ 2. 백엔드 (Spring Boot)

1. **STS 또는 IntelliJ**로 `backend` 폴더 열기  
2. `application.properties` 파일에 **MySQL DB 정보** 설정

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/blog_db
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
```

3. MySQL에서 `blog_db` 데이터베이스 생성

```sql
CREATE DATABASE blog_db;
```

4. Spring Boot 애플리케이션 실행

---

### 🌐 3. 프론트엔드 (Angular)

1. `frontend` 폴더로 이동

```bash
cd frontend
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
ng serve
```

4. 브라우저에서 아래 주소로 접속

```
http://localhost:4200
```


## 📂 프로젝트 구조

```
blog-app/
├── backend/             # Spring Boot 백엔드 프로젝트
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/blog/    # Java 소스 코드
│   │   │   │   ├── controller/           # REST API 컨트롤러
│   │   │   │   ├── service/              # 비즈니스 로직 처리
│   │   │   │   ├── repository/           # JPA 리포지토리
│   │   │   │   ├── model/                # 엔티티 클래스
│   │   │   │   └── BlogApplication.java  # 메인 애플리케이션
│   │   │   └── resources/
│   │   │       ├── application.properties # 환경 설정
│   │   │       └── static/ & templates/  # (선택) 정적 파일/템플릿
│   └── pom.xml            # Maven 의존성 설정 파일
│
├── frontend/            # Angular 프론트엔드 프로젝트
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/               # 재사용 가능한 컴포넌트
│   │   │   ├── pages/                    # 페이지 단위 구성
│   │   │   ├── services/                 # API 호출 서비스
│   │   │   ├── models/                   # 데이터 모델 인터페이스
│   │   │   └── app-routing.module.ts     # 라우팅 설정
│   │   └── environments/                 # 환경별 설정
│   └── angular.json       # Angular 프로젝트 설정
│
└── README.md             # 프로젝트 소개 문서
```

---

## 📁 디렉터리 설명

- **backend/**  
  - Spring Boot 기반의 백엔드 애플리케이션
  - REST API, DB 연동, 비즈니스 로직 처리

- **frontend/**  
  - Angular 기반의 SPA 프론트엔드 애플리케이션
  - 사용자 인터페이스 및 API 통신 처리

