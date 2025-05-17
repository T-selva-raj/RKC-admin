import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { ListComponent } from "../shared/components/list/list.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  pageTitle = "Reports";
  columns = [
    { field: "team", header: "Team Name" },
    {
      field: "status", header: "Status",
      textColors: {
        Approved: 'text-green-400',
        Pending: 'text-purple-400',
        Rejected: 'text-red-400'
      }
    }
  ]
  filteroptions = [
    { label: 'None', value: null },
    { label: 'Approved', value: 'approved' },
    { label: 'Pending', value: 'pending' },
    { label: 'Rejected', value: 'rejected' }
  ];
  actions = ['view', 'download'] as ('edit' | 'delete' | 'view')[]
  teams = [
    { id: 1, team: 'Chennai', status: 'Approved', download: '' },
    { id: 2, team: 'Chennai', status: 'Pending', download: '' },
    { id: 3, team: 'Chennai', status: 'Rejected', download: '' },
    { id: 4, team: 'Chennai', status: 'Approved', download: '' },
    { id: 5, team: 'Chennai', status: 'Pending', download: '' },
    { id: 6, team: 'Chennai', status: 'Rejected', download: '' }
  ];
}
