import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { DataService } from '../core/services/data.services';
import { ICustomer } from '../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loginSubs: Subscription;
  error: string;
  constructor(private fb: FormBuilder, private dataService: DataService,   private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/members';
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit(): void {
    const values = this.loginForm.value;
    const data = {
      'username': values.username,
      'password': values.password
    };

    if (this.loginForm.valid) {
      this.loginSubs = this.dataService.login(data).subscribe(res => 
        this.router.navigate(['/members']),
       err => this.error = 'Could not authenticate'
      );
    }
  }

}
