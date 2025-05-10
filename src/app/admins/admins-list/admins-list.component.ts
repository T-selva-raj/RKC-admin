import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ListComponent } from "../../shared/components/list/list.component";

@Component({
  selector: 'app-admins-list',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.css'
})
export class AdminsListComponent {
  pageTitle = "All Admins";
  headerActions = [
    { label: 'Add Admin', icon: 'pi pi-plus', type: 'outlined', severity: 'success' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'add' }
  ]

  columns = [
    { field: "name", header: "Admin Name" },
    { field: "createdOn", header: "Created on" },
    { field: "mobile", header: "Mobile NO" },
    { field: "status", header: "Status" }
  ]
  filteroptions = [
    { label: 'None', value: null },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }];

  actions = ['edit', 'delete', 'view'] as ('edit' | 'delete' | 'view')[]
  admins = [
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
    { name: "Selvaraj T", createdOn: "2026-01-01", mobile: '9876543210', status: 'active' },
  ];



  onSearch(event: any) {
    console.log("search", event);

  }
  onFilter(event: any) {
    console.log("filter", event);

  }
}
