import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directives';
import { Appauth } from '../auth/appauth';
import { Log } from '../log';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
  hostDirectives:[Log]
})
export class LearningResources {

}
