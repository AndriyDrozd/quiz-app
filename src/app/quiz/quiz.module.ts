import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { KindOfProfessionComponent } from './components/kind-of-profession/kind-of-profession.component';
import { TestComponent } from './components/test/test.component';
import { ResultComponent } from './components/result/result.component';
import { ArrayPipePipe } from './components/pipes/array-pipe.pipe';



@NgModule({
  declarations: [
    QuizComponent,
    KindOfProfessionComponent,
    TestComponent,
    ResultComponent,
    ArrayPipePipe
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
