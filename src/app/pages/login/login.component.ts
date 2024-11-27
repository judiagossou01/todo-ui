import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helpers } from '../../utils/helpers';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  loginForm = this.fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Helpers.notOnlyWhitespace,
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Helpers.notOnlyWhitespace],
    ],
  });

  isInvalidTouchedOrDirty(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || control.dirty);
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);

    if (control?.hasError('required')) {
      return `${Helpers.capitalizeLetter(controlName)} is required`;
    } else if (control?.hasError('minlength')) {
      const requiredLength = control.getError('minlength')?.requiredLength;
      return `${Helpers.capitalizeLetter(
        controlName
      )} must be at least ${requiredLength} characters long`;
    } else if (control?.hasError('pattern')) {
      return `${Helpers.capitalizeLetter(
        controlName
      )} must be a valid email address format`;
    }

    return '';
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
  }
}
