import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private plantsService: PlantsService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
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
 

  
  onSubmit() {
    this.plantsService.addPlant(this.plantForm.value).subscribe((plant) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.plantForm.reset();

    });
  }

}
