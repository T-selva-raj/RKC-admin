import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, ButtonModule, DropdownModule, FormsModule, InputTextModule, FloatLabel],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() columns: { field: string, header: string }[] = [];
  @Input() data: any[] = [];
  @Input() actions: ('edit' | 'delete' | 'view')[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onView = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<{ limit: number; offset: number }>();

  @Input() searchPlaceholder: string = 'Search...';
  @Input() filterOptions: { label: string; value: any }[] = [];
  @Input() selectedFilter: any;

  @Output() onSearch = new EventEmitter<string>();
  @Output() onFilterChange = new EventEmitter<any>();

  searchTerm: string = '';

  onFilterChangeHandler(filter: any) {
    if (filter.value === null) {
      this.selectedFilter = null;
    }
    else
      this.onFilterChange.emit(this.selectedFilter);
  }
  onPaginate(event: any) {
    const limit = event.rows;
    const offset = event.first;
    this.onPageChange.emit({ limit, offset });
  }
}
