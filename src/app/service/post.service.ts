import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8081/'; //백엔드 localhost url

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //api 호출할 수 있도록 http client 를 주입하기 (private 으로 생성자 주기)
  constructor(private http: HttpClient) {}

  createNewPost(data: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/posts', data);
  }

  getAllPosts(): Observable<any> {
    //위의 createNewPost 메서드 복붙해서
    return this.http.get(BASIC_URL + 'api/posts'); //data지우고, 가져오는 get 으로 바꿔주기
  }
}
