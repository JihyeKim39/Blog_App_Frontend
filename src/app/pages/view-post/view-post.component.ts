import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent implements OnInit {
  postId!: number; // number로 선언하고 !로 초기화 보장
  postData: any; // 게시글 데이터를 담을 변수

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.postId = +this.activatedRoute.snapshot.params['id'];
    console.log('Post ID:', this.postId);

    this.postService.getPostById(this.postId).subscribe({
      next: (data) => {
        this.postData = data;
        console.log('Post data:', data);
      },
      error: (err) => {
        console.error('Error fetching post:', err);
        this.matSnackBar.open('게시글을 불러오는 데 실패했습니다.', '닫기', {
          duration: 3000,
        });
      },
    });
  }
}
