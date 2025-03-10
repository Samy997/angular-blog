import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() loadMore = new EventEmitter<void>();

  onLoadMore() {
    this.loadMore.emit();
  }
}
