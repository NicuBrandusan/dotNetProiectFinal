import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TeamsService } from 'src/app/services/teams.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-furnizor',
  templateUrl: './add-furnizor.component.html',
  styleUrls: ['./add-furnizor.component.scss']
})
export class AddFurnizorComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private teamsService: TeamsService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  teamForm = this.formBuilder.group
  ({
    name: ['', [Validators.required, Validators.minLength(3)]],
    department: ['', [Validators.required]],
  });

  get name() {
     return this.teamForm.get('name'); }
  get department() {
     return this.teamForm.get('department'); }
  
  onSubmit() {
    this.teamsService.addTeam(this.teamForm.value).subscribe((team) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.teamForm.reset();

    });
  }

}
