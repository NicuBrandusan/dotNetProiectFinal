import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  id!: number;
  dataSource: Client[] = [];
  foundClient!: Client;
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.clientsService.getCurrentClient(this.id).subscribe((client) => { this.foundClient = client;});
    console.log(this.foundClient);
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
  
  onSubmit(foundClient: Client) {
    this.clientsService.updateClient(foundClient).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.clientForm.reset();
    });
  }
}

