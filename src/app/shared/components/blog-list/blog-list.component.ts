import { Component, Input } from '@angular/core';
import { BlogPost } from '../../services/blog.service';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogPostItemComponent, EmptyStateComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  @Input() posts: BlogPost[] = [];
}
