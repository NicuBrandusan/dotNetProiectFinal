import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'operations'];
  newPlant: Plant = {};
  dataSource: Plant[] = [];

  searchBy: string = '';

  constructor(private plantsService : PlantsService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((plants: any) => {
      this.dataSource = plants;
    });
  }

  addPlant() {
    this.plantsService.addPlant(this.newPlant).subscribe((plant) => {
      this.dataSource = [...this.dataSource, plant];
      this.newPlant = {};
    });
  }

  deletePlant(plant: Plant) {
    this.plantsService.deletePlant(plant).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== plant.id);
    });
  }

  updatePlant(plant: Plant) {
    this.plantsService.updatePlant(plant).subscribe(() => {
      plant.isEditing = false;
      this.dataSource = this.dataSource.map((item) => (item.id === plant.id ? plant : item));
    });
  }

  filterPlant() {
    if(this.searchBy){
      this.plantsService.getPlants().subscribe((plants) => {
         this.dataSource = this.dataSource.filter((item) => 
          item.name?.includes(this.searchBy) || item.address?.includes(this.searchBy))});
      }
    else{
      this.plantsService.getPlants().subscribe((plants) => { 
        this.dataSource = plants;});
      }
    }

    goToPlantDetail(plant: Plant) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/plants/details-plant/" + plant.id;
     }
     
     goToPlantEdit(plant: Plant) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/plants/edit-plant/" + plant.id;
     } 

}

