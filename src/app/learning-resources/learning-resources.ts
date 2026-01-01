import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directives';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
})
export class LearningResources {

}
