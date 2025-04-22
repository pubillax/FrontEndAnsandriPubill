import { Routes } from '@angular/router';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';
import { AggregateComponent } from './aggregate/aggregate.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"modify", component: ModifyComponent},
    {path:"aggregate", component: AggregateComponent},
    {path:"delete", component: DeleteComponent}
];

