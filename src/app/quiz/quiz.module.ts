import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { KindOfProfessionComponent } from './components/kind-of-profession/kind-of-profession.component';
import { TestComponent } from './components/test/test.component';
import { ResultComponent } from './components/result/result.component';
import { ArrayPipePipe } from './components/pipes/array-pipe.pipe';
import { IconComponent } from '../share/icons/components/icon/icon.component';
import { ToogleTextDirective } from './components/directives/toogle-text.directive';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [
    QuizComponent,
    KindOfProfessionComponent,
    TestComponent,
    ResultComponent,
    ArrayPipePipe,
    IconComponent,
    ToogleTextDirective,
    NewsComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
