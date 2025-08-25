import { Routes } from '@angular/router';
import { PolicialListComponent } from './components/policial-list/policial-list.component';
import { PolicialFormComponent } from './components/policial-form/policial-form.component';


export const routes: Routes = [
    {path: '', component: PolicialListComponent},
    {path: 'policiais', component: PolicialListComponent},
    {path: 'policiais/novo', component: PolicialFormComponent},
    {path: 'policiais/editar/:id', component: PolicialFormComponent}
];
