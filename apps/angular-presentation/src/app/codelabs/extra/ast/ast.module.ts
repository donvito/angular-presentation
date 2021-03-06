import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/presentation/src/lib/slide-routes';

import { ExerciseModule } from '../../../exercise/exercise.module';
import { PresentationModule } from '../../../../../../../libs/presentation/src/lib/presentation.module';
import { FeedbackModule } from '../../../feedback/feedback.module';
import { BrowserWindowModule } from '../../../../../../../libs/browser/src/lib/browser.module';
import { RunnersModule } from '../../../exercise/runners/runners.module';
import { AstComponent } from './ast.component';
import { TooltipsModule } from '../../../../../../../libs/tooltips/src/lib/tooltips.module';
import { MatchTypesOnHoverDirective } from './match-types-on-hover.directive';
import { FakeBabelModule } from '../../../exercise/fake-babel-runner/fake-babel-runner.module';
import { AstPreviewRunnerModule } from './ast-preview-runner/ast-preview-runner.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DebuggerComponent } from './debugger/debugger.component';
import { SimpleEditorModule } from '../../../exercise/simple-editor/simple-editor.module';
import { MatCardModule } from '@angular/material';
import { TestSetComponent } from './test-set/test-set.component';
import { CommonModule } from '@angular/common';
import { SizePickerModule } from './size-picker/size-picker.module';
import { NewProgressBarModule } from './new-progress-bar/new-progress-bar.module';
import { AngularSlidesToPdfModule } from '../../../../../../../libs/angular-slides-to-pdf/src';


const routes = RouterModule.forChild(
  SlidesRoutes.get(AstComponent)
);

@NgModule({
  imports: [
    routes,
    CommonModule,
    AstPreviewRunnerModule,
    PresentationModule,
    ExerciseModule,
    BrowserWindowModule,
    FeedbackModule,
    SimpleEditorModule,
    FlexLayoutModule,
    FormsModule,
    RunnersModule,
    TooltipsModule,
    SizePickerModule,
    MatCardModule,
    FakeBabelModule,
    NewProgressBarModule,
    AngularSlidesToPdfModule,
  ],
  declarations: [
    AstComponent,
    MatchTypesOnHoverDirective,
    DebuggerComponent,
    TestSetComponent,
  ],
  exports: [AstComponent]
})
export class AstModule {

}
