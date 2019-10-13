import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { KindOfProfessionComponent } from './components/kind-of-profession/kind-of-profession.component';
import { TestComponent } from './components/test/test.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
        {
            path: 'dashboard',
            component: KindOfProfessionComponent
        },
        {
          path: 'test',
          component: TestComponent
        },
        {
          path: 'result',
          component: ResultComponent
        },
        {
          path: 'news',
          component: NewsComponent
        },
        {
          path: '',
          redirectTo: '/dashboard'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
