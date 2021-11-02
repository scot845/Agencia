import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cosas: any[] = [{ nombre: "Guillermo", edad: 28 }, { nombre: "Wilson", edad: 35 }, { nombre: "Emilio", edad: 30 }]

  editar(nombre: String) {
    alert(nombre);
  }

}
