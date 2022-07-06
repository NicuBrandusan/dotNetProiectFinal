import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  dataSource: Team[] = [];
  foundTeam!: Team;
  constructor(
    private formBuilder: FormBuilder,
    private teamsService: TeamsService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.teamsService.getCurrentTeam(this.id).subscribe((team) => { this.foundTeam = team;});
    console.log(this.foundTeam);
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
  
  onSubmit(foundTeam: Team) {
    this.teamsService.updateTeam(foundTeam).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.teamForm.reset();
    });
  }
}
