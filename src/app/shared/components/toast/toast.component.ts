import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [Toast],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  providers: [MessageService]
})
export class ToastComponent {
  constructor(private messageService: MessageService) {
  }
}
