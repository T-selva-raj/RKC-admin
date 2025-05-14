import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { Router } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonModule, DividerModule, InputGroupModule, CommonModule, InputGroupAddonModule, ReactiveFormsModule, InputText, PasswordModule, FloatLabelModule, LoaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  isLoader: boolean = false;
  constructor(private fb: FormBuilder, private route: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoader = !this.isLoader;
      this.toastService.success('Login Successful', 'Welcome back!');
      setTimeout(() => {
        this.isLoader = !this.isLoader;
        // this.route.navigate(['/app/dashboard']);
      }, 2000)
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
