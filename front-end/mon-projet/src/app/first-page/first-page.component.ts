import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements OnInit{
titre ='bienvenue chez aston'

constructor(private router: Router) {}
ngOnInit()  {
  this.titre='bienvenue chez aston'

  
}



redirectToConnexionPage() {
  this.router.navigate(['/connexion']);
}

redirectToInscriptionPage() {
  this.router.navigate(['/inscription']);
}


}


