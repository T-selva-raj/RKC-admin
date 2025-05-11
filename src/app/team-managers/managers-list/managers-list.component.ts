import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { Paginator } from 'primeng/paginator';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-managers-list',
  standalone: true,
  imports: [HeaderComponent, CardModule, DividerModule, CommonModule, Paginator, FloatLabel, InputTextModule],
  templateUrl: './managers-list.component.html',
  styleUrl: './managers-list.component.css'
})
export class ManagersListComponent {
  pageTitle = "Team Managers";
  headerActions = [
    { label: 'Add Manager', icon: 'pi pi-plus', type: 'outlined', severity: 'success' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'add' }
  ]
  managers = [
    {

      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pardeep_Narwal.png',
      managerName: 'Palani vel murugan',
      phone: '9876543210',
      email: 'palanivel@example.com',
      teamName: 'Team Titans',
      villageName: 'Melamaruhthappapuram'
    },
    {
      image: null,
      managerName: 'Anita Sharmaas',
      phone: '9123456780',
      email: 'anita@example.com',
      teamName: 'The Strikers',
      villageName: 'Lakshmipur'
    },
    {

      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pardeep_Narwal.png',
      managerName: 'Vijay Singh',
      phone: '9988776655',
      email: 'vijay@example.com',
      teamName: 'The Warriors',
      villageName: 'Kisanpur'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pardeep_Narwal.png',
      managerName: 'Suman Devi',
      phone: '9876543212',
      email: 'suman@example.com',
      teamName: 'Eagle Squad',
      villageName: 'Rajpur'
    },
    {
      image: null,
      managerName: 'Amit Joshi',
      phone: '9345678901',
      email: 'amit@example.com',
      teamName: 'Storm Riders',
      villageName: 'Gopalganj'
    },
    {
      image: null,
      managerName: 'Priya Mehra',
      phone: '9001234567',
      email: 'priya@example.com',
      teamName: 'Thunderbolts',
      villageName: 'Madhavpur'
    }, {
      image: null,
      managerName: 'Priya Mehra',
      phone: '9001234567',
      email: 'priya@example.com',
      teamName: 'Thunderbolts',
      villageName: 'Madhavpur'
    }, {
      image: null,
      managerName: 'Priya Mehra',
      phone: '9001234567',
      email: 'priya@example.com',
      teamName: 'Thunderbolts',
      villageName: 'Madhavpur'
    }
  ];
  paginatedManagers: any[] = [];
  limit: number = 10;
  offset: number = 0;
  onPageChange(event: any): void {
    this.offset = event.offset;
    this.limit = event.limit;
    console.log(this.offset, this.limit);

  }
}
