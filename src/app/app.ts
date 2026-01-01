import { Component, computed, inject, signal } from '@angular/core';
import { Auth } from './auth/auth';
import { LearningResources } from './learning-resources/learning-resources';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Auth, LearningResources],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 private authService = inject(AuthService);

 isAdmin = computed(() => this.authService.activePermission()==='admin');
}
