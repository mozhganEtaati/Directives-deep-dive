import { Component, signal } from '@angular/core';
import { Auth } from './auth/auth';
import { LearningResources } from './learning-resources/learning-resources';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Auth, LearningResources],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Directives-deep-dive');
}
