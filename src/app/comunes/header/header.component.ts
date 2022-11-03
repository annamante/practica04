import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  TextoFinal: any;

  constructor(private route: Router) { }

  ngOnInit(): void {}
  
  cargar(texto:any){
      console.log(texto);
      this.TextoFinal=texto;
    }

  buscar(){
      this.route.navigate(['/Heroe', this.TextoFinal])
    }

    regresar(){
      this.route.navigate(['/Heroes'])
    }
  }


