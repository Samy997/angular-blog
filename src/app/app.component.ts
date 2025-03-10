import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPost, BlogService } from './shared/services/blog.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoadingService } from './shared/services/loading.service';
import { BlogListComponent } from './shared/components/blog-list/blog-list.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    BlogListComponent,
    PaginationComponent,
    ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  posts: BlogPost[] = [];
  page = 1;
  perPage = 9;
  largeScreenPerPage = 9;
  smallScreenPerPage = 6;
  hasMorePosts = true;
  error: string | null = null;

  constructor(
    private readonly blogService: BlogService,
    public loadingService: LoadingService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.fetchPosts();
  }

  detectScreenSize() {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(take(1))
      .subscribe((result) => {
        this.perPage = result.matches ? this.largeScreenPerPage : this.smallScreenPerPage;
        this.fetchPosts();
      });
  }

  fetchPosts() {
    this.blogService.getPosts(this.page, this.perPage).subscribe({
      next: (newPosts) => {
        this.posts = [...this.posts, ...newPosts];
        this.hasMorePosts = newPosts.length === this.perPage;
        this.page++;
      },
      error: (err) => {
        this.error = 'Failed to load posts. Please try again.';
      },
    });
  }
}
