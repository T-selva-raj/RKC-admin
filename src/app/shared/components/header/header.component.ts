import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';

  @Input() actions: {
    label: string;
    icon: string;
    type?: string;
    severity?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast';
    action: 'add' | 'delete' | 'edit' | string;
  }[] = [];

  @Output() onAction = new EventEmitter<string>();
}
