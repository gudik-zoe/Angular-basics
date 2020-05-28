import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Custome } from './custome.validator';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @Input()
  final = [];
  isLoading = false;
  message = 'loading';
  data = true;

  constructor(
    private fb: FormBuilder,
    private service: CartServiceService,
    private router: Router,
    private http: HttpClient
  ) {}
  myForm: FormGroup;
  total() {
    return this.service.total(this.final);
  }

  submit() {
    this.isLoading = true;
    let finalData = [];
    finalData.push(this.myForm.value, this.final);
    this.service
      .postData(
        'https://shopping-project-895a7.firebaseio.com/orders.json',
        finalData
      )
      .subscribe((res) => {
        this.myForm.reset();
        this.final = [];
        this.data = false;

        this.service.refresh()
        console.log(res);
      });
  }

  edit() {
    this.router.navigate(['/card']);
  }
  toStore() {
    this.router.navigate(['/products']);
  }
  ngOnInit() {
    this.final = this.service.getCardItems();

    this.myForm = this.fb.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        city: ['', Validators.required],
        province: ['', Validators.required],
        streetNumber: ['', Validators.required],
      },
      { validator: [Custome.confirmation, Custome.number] }
    );
  }
}
