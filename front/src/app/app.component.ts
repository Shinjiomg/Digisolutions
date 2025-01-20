import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Digisolutions';
  constructor() { }
}
