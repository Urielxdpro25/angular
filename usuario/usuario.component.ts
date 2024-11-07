import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
    Nombre: string="Uriel";
    Edad:number =17;
    Ocupación:string="Desarrollador web"
    
}
