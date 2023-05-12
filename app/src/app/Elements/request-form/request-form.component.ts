import { Component } from '@angular/core';

import { RequestServiceService } from 'src/app/service/request-service/request-service.service';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {

  request={
    
    firstName: ' ',
    lastName: ' ',
    email: ' ',
    password: ' ',
    title: ' ',
    description: ' ',
    service: ' ',
    deadline: ' ',
    budget: ' ',
    Document: ' ',
    numTel:'',
    Entreprise:''

  }

  constructor(private requestService: RequestServiceService) { }

  makeRequest() {
    console.log(this.request);
    
    this.requestService.createRequest(this.request).subscribe(
      response => {
        // Gérer la réponse du backend, par exemple, afficher un message de succès
        console.log('Request created successfully:', response);
        alert('Request created successfully');
      },
      error => {
        // Gérer l'erreur, par exemple, afficher un message d'erreur
        console.error('Error creating request:', error);
        alert('Error creating request');
      }
    );
  }
 

}
