import { Routes } from '@angular/router';
import { VisualizeDetecteadComponent } from './visualize-detectead/visualize-detectead.component';
import { SuspDetecteadComponent } from './susp-detectead/susp-detectead.component';
import { NotifyDetecteadComponent } from './notify-detectead/notify-detectead.component';
import { HomeDetecteadComponent } from './home-detectead/home-detectead.component';
import { CheckDetecteadComponent } from './check-detectead/check-detectead.component';
import { AiInfoDetcteadComponent } from './ai-info-detctead/ai-info-detctead.component';
import { DatabaseDetecteadComponent } from './database-detectead/database-detectead.component';

export const routes: Routes = [
    { path: '', component: HomeDetecteadComponent },
    { path: 'visualize', component: VisualizeDetecteadComponent },
    { path: 'suspactions', component: SuspDetecteadComponent },
    { path: 'notify', component: NotifyDetecteadComponent },
    { path: 'log', component: DatabaseDetecteadComponent },
    { path: 'check', component: CheckDetecteadComponent },
    { path: 'ai-info', component: AiInfoDetcteadComponent },
    { path: 'database', component: DatabaseDetecteadComponent },
];
