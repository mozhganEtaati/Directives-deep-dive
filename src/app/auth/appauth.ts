import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAppauth]',
})
export class Appauth {
  userType = input.required<Permission>({alias:'appAppauth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() { 
    effect(()=>{
      if(this.authService.activePermission()===this.userType()){
        //This tells angular to render the template and content between those ng-template tags
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }
    });
  }

}
