import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSnackBarModule,
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
