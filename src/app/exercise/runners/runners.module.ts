import { NgModule } from '@angular/core';
import { AngularPreviewRunnerComponent } from './angular-preview-runner/angular-preview-runner.component';
import { AngularTestRunnerComponent } from './angular-test-runner/angular-test-runner.component';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests/tests.component';
import { TestDescriptionComponent } from './test-description/test-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AngularPreviewRunnerComponent,
    AngularTestRunnerComponent,
    TestsComponent,
    TestDescriptionComponent
  ],
  exports: [
    AngularPreviewRunnerComponent,
    AngularTestRunnerComponent,
    TestsComponent,
    TestDescriptionComponent
  ]
})
export class RunnersModule {
}
