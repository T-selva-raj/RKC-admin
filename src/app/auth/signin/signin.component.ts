import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../shared/services/toast.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ButtonModule, DividerModule, InputGroupModule, CommonModule, InputGroupAddonModule, ReactiveFormsModule, InputText, PasswordModule, FloatLabelModule, LoaderComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  isLoader: boolean = false;
  constructor(private fb: FormBuilder, private route: Router, private toast: ToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoader = !this.isLoader;
      setTimeout(() => {
        this.isLoader = !this.isLoader;
        this.toast.success("Success", "Loged in successfully");
        this.route.navigate(['/app/dashboard']);
      }, 500)
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
