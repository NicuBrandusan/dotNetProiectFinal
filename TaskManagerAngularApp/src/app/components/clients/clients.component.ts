import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'company', 'email' ,'operations'];
  newClient: Client = {};
  dataSource: Client[] = [];

  searchBy: string = '';

  constructor(private clientsService : ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients: any) => {
      this.dataSource = clients;
    });
  }

  addClient() {
    this.clientsService.addClient(this.newClient).subscribe((client) => {
      this.dataSource = [...this.dataSource, client];
      this.newClient = {};
    });
  }

  deleteClient(client: Client) {
    this.clientsService.deleteClient(client).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== client.id);
    });
  }

  updateClient(client: Client) {
    this.clientsService.updateClient(client).subscribe(() => {
      client.isEditing = false;
      this.dataSource = this.dataSource.map((item) => (item.id === client.id ? client : item));
    });
  }

  filterClient() {
    if(this.searchBy){
      this.clientsService.getClients().subscribe((clients) => {
         this.dataSource = this.dataSource.filter((item) => 
          item.name?.includes(this.searchBy) || item.name?.includes(this.searchBy) || item.email?.includes(this.searchBy))});
      }
    else{
      this.clientsService.getClients().subscribe((timeTrItems) => { 
        this.dataSource = timeTrItems;});
      }
    }

    goToClientDetail(client: Client) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/clients/details/" + client.id;
     }
     
     goToClientEdit(client: Client) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/clients/edit-client/" + client.id;
     } 

}
