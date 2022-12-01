import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    this._initForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this._authService.login(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private _initForm() {
    this.form = this._fb.group({
      username: this._fb.control('', [Validators.required]),
      password: this._fb.control('', [Validators.required]),
    });
  }
}
