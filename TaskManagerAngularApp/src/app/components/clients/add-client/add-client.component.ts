import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private clientsService: ClientsService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  clientForm = this.formBuilder.group
  ({
    name: ['', [Validators.required, Validators.minLength(3)]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  get name() {
     return this.clientForm.get('name'); }
  get company() {
     return this.clientForm.get('company'); }
  get email() {
     return this.clientForm.get('email'); }
  
  onSubmit() {
    this.clientsService.addClient(this.clientForm.value).subscribe((client) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.clientForm.reset();

    });
  }

}
