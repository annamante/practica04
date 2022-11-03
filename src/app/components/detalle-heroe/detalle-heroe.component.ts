import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {

  nombreDetalle: any;
  aparicion: any;
  imagen: any;
  bio: any;
  casa: any;

  id: any;

  DetalleHeroe=[
    {
      id: 1,
      nombre:"Aquaman",
      bio:"El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/imagen/aquaman.png",
      aparicion:"1941-11-01",
      casa:"DC"
    },
    {
      id:2,
      nombre:"Batman",
      bio:"Los rasgos principales de Batman se resumen en destreza física, habilidades deductivas i obsesión. La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/imagen/batman.png",
      aparicion:"1930-05-01",
      casa:"DC"
    },
    {
      id:3,
      nombre:"Daredevil",
      bio:"Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede ver a través de un sexto sentido que le sirve como un radar similar al de los murciélagos.",
      img: "assets/imagen/daredevil.png",
      aparicion:"1964-01-01",
      casa:"Marvel"
    },
    {
      id:4,
      nombre:"Hulk",
      bio:"Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk está al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/imagen/hulk.png",
      aparicion:"1962-05-01",
      casa:"Marvel"
    },
    {
      id:5,
      nombre:"Linterna Verde",
      bio:"Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (Revisada por escritores posteriores como un poder místico llama Starheart), una llama mágica contenida en dentro de un obre (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/imagen/linterna-verde.png",
      aparicion:"1940-06-01",
      casa:"DC"
    },
    {
      id:6,
      nombre:"Spider-Man",
      bio:"Tras ser mordido por una araña readiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos incribles. Un sentido arácnido, que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/imagen/spiderman.png",
      aparicion:"1962-08-01",
      casa:"Marvel"
    },
    {
      id:7,
      nombre:"Wolverine",
      bio:"En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres. Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/imagen/wolverine.png",
      aparicion:"1974-11-01",
      casa:"Marvel"
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('nombre');

  for (let i=0; i < this.DetalleHeroe.length; i++){
    if(this.id == this.DetalleHeroe[i].nombre||this.id.toLowerCase()==this.DetalleHeroe[i].nombre.toLowerCase()){
        this.nombreDetalle=this.DetalleHeroe[i].nombre;
        this.aparicion=this.DetalleHeroe[i].aparicion;
        this.imagen=this.DetalleHeroe[i].img;
        this.bio=this.DetalleHeroe[i].bio;
        this.casa=this.DetalleHeroe[i].casa;
    }
  }
}
}
