import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-managers-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './managers-list.component.html',
  styleUrl: './managers-list.component.css'
})
export class ManagersListComponent {
  pageTitle = "Team Managers";
  headerActions = [
    { label: 'Add Manager', icon: 'pi pi-plus', type: 'outlined', severity: 'success' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'add' }
  ]
}
