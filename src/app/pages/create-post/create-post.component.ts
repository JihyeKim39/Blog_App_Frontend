import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostService } from '../../service/post.service';

import { error } from 'console';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    CommonModule,
    MatSnackBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;

  tags: string[] = []; //빈 배열로 초기화해줌

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, [Validators.required, Validators.maxLength(1000)]],
      postedBy: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const postData = {
        ...this.postForm.value,
        tags: this.tags,
      };

      console.log('Form Submitted:', postData); // ✅ 이걸로 바꾸기!

      this.snackBar.open('Post created successfully!', 'Close', {
        duration: 3000,
      });

      this.router.navigate(['/posts']); // ❗ 이건 라우팅 경로 확인도 필요 (아래 참고)
    } else {
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000,
      });
    }
  }

  //tag를 추가하는 기능
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && !this.tags.includes(value)) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: any) {
    // tag를 삭제하는 기능
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createPost() {
    const data = this.postForm.value;
    data.tags = this.tags;

    this.postService.createNewPost(data).subscribe(
      (res) => {
        this.snackBar.open('Post Created Successfully !!', 'OK');
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.snackBar.open('Something Went Wrong!!', 'OK');
      }
    );
  }
}
