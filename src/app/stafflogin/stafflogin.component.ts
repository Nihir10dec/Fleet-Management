import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  user ;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _staffservice : StaffService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async onSubmit() {
    // console.log("inside submit")
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const obj = {
          "empMailId": username,
          "empPassword" : password
      }
      // console.log(obj);
      this.user =  await this._staffservice.validateEmployee(obj);
        // console.log(this.user);
        if(this.user){
          this._staffservice.emit(this.user);
          this.router.navigate(['/home']
          //  , {state: {data: {"staffLoggedIn" : true} }}
           );
        }
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
