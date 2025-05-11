import { Component } from '@angular/core';
import { ListComponent } from "../../shared/components/list/list.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [ListComponent, HeaderComponent],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css'
})
export class TeamsListComponent {
  pageTitle = "Teams list";
  headerActions = [
    { label: 'Add Team', icon: 'pi pi-plus', type: 'outlined', severity: 'success' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'add' },
    { label: 'Delete', icon: 'pi pi-trash', type: 'outlined', severity: 'danger' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'delete' }
  ]
  columns = [
    { field: "village", header: "Village Name" },
    { field: "Manager", header: "Manager" },
    {
      field: "status", header: "Status",
      textColors: {
        Approved: 'text-green-400',
        Pending: 'text-purple-400',
        Rejected: 'text-red-400'
      }
    },
    {
      field: 'Payment', header: 'Payment',
      type: 'tag', tagOptions: {
        Done: 'bg-green-400',
        Pending: 'bg-yellow-400'
      }
    }
  ]
  filteroptions = [
    { label: 'None', value: null },
    { label: 'Approved', value: 'approved' },
    { label: 'Pending', value: 'pending' },
    { label: 'Rejected', value: 'rejected' }
  ];
  actions = ['edit', 'delete', 'view'] as ('edit' | 'delete' | 'view')[]
  registrations = [
    { id: 1, village: 'Chennai', Manager: 'Ajay Kumar', Payment: 'Done', status: 'Approved' },
    { id: 2, village: 'Chennai', Manager: 'Rohit Singh', Payment: 'Pending', status: 'Pending' },
    { id: 3, village: 'Chennai', Manager: 'Vikram Rana', Payment: 'Done', status: 'Rejected' },
    { id: 4, village: 'Chennai', Manager: 'Ajay Kumar', Payment: 'Pending', status: 'Approved' },
    { id: 5, village: 'Chennai', Manager: 'Rohit Singh', Payment: 'Done', status: 'Pending' },
    { id: 6, village: 'Chennai', Manager: 'Vikram Rana', Payment: 'Done', status: 'Rejected' }
  ];



  onSearch(event: any) {
    console.log("search", event);

  }
  onFilter(event: any) {
    console.log("filter", event);

  }
}
