import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IiComponent } from './ii.component';
import { SlidesRoutes } from '../../../../../../libs/presentation/src/lib/slide-routes';
import { RouterModule } from '@angular/router';


const routes = RouterModule.forChild(
  SlidesRoutes.get(IiComponent)
);

@NgModule({
  imports: [
    routes,
    CommonModule
  ],
  declarations: [
    IiComponent,

  ],
  exports: [IiComponent]
})
export class IiModule {
}
