import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../services/blog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-post-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-post-item.component.html',
  styleUrl: './blog-post-item.component.scss'
})
export class BlogPostItemComponent {
  @Input() post!: BlogPost;
}
