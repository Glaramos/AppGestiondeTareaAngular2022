import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  

  listaTareas: Tarea[]=[];
  nombreTarea: string = '';

  constructor(){

  }

  ngOnInit(): void {
   
  }

  AgregarTarea(){

    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado: false,

    }

    this.listaTareas.push(tarea);
    this.nombreTarea='';

  }
  eliminar(i: number){
    this.listaTareas.splice(i,1);

  }
  actualizarTarea(tarea:Tarea, i:number){
    this.listaTareas[i].estado = !tarea.estado;
  }
}
