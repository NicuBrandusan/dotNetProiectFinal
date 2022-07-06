import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Plant} from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})
export class EditPlantComponent implements OnInit {

  id!: number;
  dataSource: Plant[] = [];
  foundPlant!: Plant;
  constructor(
    private formBuilder: FormBuilder,
    private plantsService: PlantsService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.plantsService.getCurrentPlant(this.id).subscribe((plant) => { this.foundPlant = plant;});
    console.log(this.foundPlant);
  }

  plantForm = this.formBuilder.group
  ({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required]],
  });

  get name() {
     return this.plantForm.get('name'); }
  get address() {
     return this.plantForm.get('address'); }
  
  onSubmit(foundPlant: Plant) {
    this.plantsService.updatePlant(foundPlant).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.plantForm.reset();
    });
  }
}

