// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  url: string;
}

interface ApiResponse {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  user: { name: string; profile_image: string };
  published_at: string;
  tag_list: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly apiUrl = 'https://dev.to/api/articles';

  constructor(private readonly http: HttpClient) {}

  getPosts(page: number = 1, perPage: number = 6): Observable<BlogPost[]> {
    return this.http.get<ApiResponse[]>(`${this.apiUrl}?page=${page}&per_page=${perPage}`).pipe(
      map(posts =>
        posts.map(post => ({
          id: post.id,
          title: post.title,
          description: post.description || '',
          image: post.cover_image || 'assets/images/placeholder.svg',
          author: post.user.name,
          authorImage: post.user.profile_image,
          date: post.published_at,
          category: post.tag_list.length ? post.tag_list[0] : 'General',
          url: post.url
        }))
      )
    );
  }
}
