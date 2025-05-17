import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/app/dashboard'] },
    { label: 'Teams', icon: 'pi pi-users', routerLink: ['/app/teams'] },
    { label: 'Team Managers', icon: 'pi pi-user-edit', routerLink: ['/app/team-managers'] },
    { label: 'Admins', icon: 'pi pi-shield', routerLink: ['/app/admins'] },
    { label: 'Gallery', icon: 'pi pi-image', routerLink: ['/app/gallery'] },
    { label: 'Reports', icon: 'pi pi-file-pdf', routerLink: ['/app/reports'] },
    { label: 'Fixtures', icon: 'pi pi-calendar', routerLink: ['/app/match-control/fixtures'] },
    { label: 'Match Status', icon: 'pi pi-chart-line', routerLink: ['/app/match-control/status'] },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/app/settings/all'] }
  ];
}
