import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  sub: Subscription

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['registered']) {
          this.snackBar.open('Now you can go', 'params', { duration: 2000 });
        } else if (params['accessDenied']) {
          this.snackBar.open('Please log in', 'params', { duration: 2000 });
        } else if (params['sessionFailed']) {
          this.snackBar.open('Log in again', 'params', { duration: 2000 });
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();

    this.sub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => this.snackBar.open(error.error.message, 'error', { duration: 2000 }),
      () => this.form.enable()
    );
  }
}
