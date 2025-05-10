import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";
import { ListComponent } from "../shared/components/list/list.component";
@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [TableModule, CardModule, RouterModule, HeaderComponent, ListComponent],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.css'
})
export class DashboardDetailsComponent {
  summaryData = [
    { title: 'Total Teams', value: '40', bg: 'bg-primary-200' },
    { title: 'Total Players', value: '400', bg: 'bg-pink-200' },
    { title: 'Next match', value: 'Team A vs Team B', bg: 'bg-indigo-200' },
    { title: 'Teams Verified', value: '40', bg: 'bg-gray-200' },
    { title: 'Payment Pending', value: '23', bg: 'bg-orange-200' },
    { title: 'Announcements', value: '3', bg: 'bg-cyan-200' }
  ];

  columns = [
    { field: "team", header: "Team" },
    { field: "Manager", header: "Manager" },
    { field: "status", header: "Status" }
  ]
  // actions = ['edit', 'delete', 'view'] as ('edit' | 'delete' | 'view')[]
  registrations = [
    { team: 'Warriors', Manager: 'Ajay Kumar', status: 'Approved' },
    { team: 'Panthers', Manager: 'Rohit Singh', status: 'Pending' },
    { team: 'Spartans', Manager: 'Vikram Rana', status: 'Rejected' }
  ];
}
