
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-furnizori',
  templateUrl: './furnizori.component.html',
  styleUrls: ['./furnizori.component.scss']
})
export class FurnizoriComponent implements OnInit {
  @ViewChild('TABLE') table!: ElementRef;
  

  displayedColumns: string[] = ['name', 'department', 'operations'];
  newTeam: Team = {};
  dataSource: Team[] = [];
  allTeams: Team[] = [];

  searchBy: string = '';
  sortedData: Team[];

  constructor(private teamsService : TeamsService, private router: Router) { 
    this.sortedData = this.dataSource.slice();
  }

  // sortData(sort: Sort) {
  //   const data = this.dataSource.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name':
  //         return compare(a.name, b.name, isAsc);
  //       case 'department':
  //         return compare(a.department, b.department, isAsc);
  //       default:
  //         return 0;
  //       }
  //     });
  //   }


  ngOnInit(): void {
    this.teamsService.getTeams().subscribe((teams: any) => {
      this.dataSource = teams;
    });
  }

  

  addTeam() {
    this.teamsService.addTeam(this.newTeam).subscribe((activity) => {
      this.dataSource = [...this.dataSource, activity];
      this.newTeam = {};
      this.filterTeam();
    });
  }

  deleteTeam(team: Team) {
    this.teamsService.deleteTeam(team).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== team.id);
    });
  }

  updateTeam(team: Team) {
    this.router.navigateByUrl(`teams/edit/${team.id}`, { state: { team} });
    this.filterTeam();
  }

  filterTeam() {
    if(this.searchBy){
      this.teamsService.getTeams().subscribe((teams) => {
         this.dataSource = this.dataSource.filter((item) => 
         item.name?.includes(this.searchBy) || item.department?.includes(this.searchBy))});
      }
    else{
      this.teamsService.getTeams().subscribe((timeTrItems) => { 
        this.dataSource = timeTrItems;});
      }
    // this.dataSource = this.allTeams.filter(item=> item.name?.includes(this.searchBy) || item.department?.includes(this.searchBy));

    }

    goToTeamDetail(team: Team) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/furnizori/details/" + team.id;
     }
     
     goToFurnizorEdit(team: Team) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/furnizori/edit-furnizor/" + team.id;
     } 

     
// try to download in xlsx format, TODO
  ExportTOExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
    
  }

}
function compare(a: string, b: string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

