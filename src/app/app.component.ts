import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, ToolbarModule, PanelMenuModule]
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' },
      { label: 'Search', icon: 'pi pi-search' }
    ];
  }
}
