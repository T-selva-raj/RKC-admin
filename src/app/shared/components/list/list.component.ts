import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FloatLabel } from 'primeng/floatlabel';
import { Paginator } from 'primeng/paginator';
import { DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, ButtonModule, DropdownModule, FormsModule, InputTextModule, FloatLabel, Paginator, DatePipe, TagModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() columns: { field: string, header: string, type?: string, format?: string, tagOptions?: any, textColors?: any }[] = [];
  @Input() data: any[] = [];
  @Input() actions: ('edit' | 'delete' | 'view')[] = [];
  @Input() isSearch: boolean = false;
  @Input() isFilter: any = null;
  @Input() isPaginator: boolean = false;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onView = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<{ limit: number; offset: number }>();

  @Input() searchPlaceholder: string = 'Search...';
  @Input() filterOptions: { label: string; value: any }[] = [];
  @Input() selectedFilter: any;
  @Input() pagenatorOptions: number[] = [5, 10, 15, 20];
  @Input() page: number = 5;
  @Input() select: boolean = false;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onFilterChange = new EventEmitter<any>();
  searchTerm: string = '';
  @Output() selectedRowsChange = new EventEmitter<any[]>();

  selectedRows: any[] = [];

  onSelectionChange() {
    console.log(this.selectedRows);

    this.selectedRowsChange.emit(this.selectedRows);
  }


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
