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
    { field: "team", header: "Team Name" },
    { field: "village", header: "Village Name" },
    { field: "Manager", header: "Manager" },
    { field: "status", header: "Status" }
  ]
  filteroptions = [
    { label: 'None', value: null },
    { label: 'Approved', value: 'approved' },
    { label: 'Pending', value: 'pending' },
    { label: 'Rejected', value: 'rejected' }
  ];
  actions = ['edit', 'delete', 'view'] as ('edit' | 'delete' | 'view')[]
  registrations = [
    { team: 'Warriors', village: 'Chennai', Manager: 'Ajay Kumar', status: 'Approved' },
    { team: 'Panthers', village: 'Chennai', Manager: 'Rohit Singh', status: 'Pending' },
    { team: 'Spartans', village: 'Chennai', Manager: 'Vikram Rana', status: 'Rejected' },
    { team: 'Warriors', village: 'Chennai', Manager: 'Ajay Kumar', status: 'Approved' },
    { team: 'Panthers', village: 'Chennai', Manager: 'Rohit Singh', status: 'Pending' },
    { team: 'Spartans', village: 'Chennai', Manager: 'Vikram Rana', status: 'Rejected' },
    { team: 'Warriors', village: 'Chennai', Manager: 'Ajay Kumar', status: 'Approved' },
    { team: 'Panthers', village: 'Chennai', Manager: 'Rohit Singh', status: 'Pending' },
    { team: 'Spartans', village: 'Chennai', Manager: 'Vikram Rana', status: 'Rejected' }
  ];



  onSearch(event: any) {
    console.log("search", event);

  }
  onFilter(event: any) {
    console.log("filter", event);

  }
}
