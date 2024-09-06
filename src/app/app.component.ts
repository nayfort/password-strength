import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestPasswordComponent} from "./pages/test-password/test-password.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-strength';
}
