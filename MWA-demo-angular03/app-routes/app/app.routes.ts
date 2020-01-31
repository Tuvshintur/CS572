import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutusComponent } from "./aboutus.component";
import { ParamComponent } from "./params/param.component";
import { QueryComponent } from "./params/query.component";
import { ParentComponent } from "./parentchild/parent.component";
import { ChildComponent } from "./parentchild/child.component";
import { GuardsComponent } from "./guards/guards.component";

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'param/:id', component: ParamComponent },
    { path: 'query', component: QueryComponent },
    {
        path: 'parent', component: ParentComponent, children: [{ path: 'child', component: ChildComponent }]
    },
    { path: 'guards', component: GuardsComponent, canActivate: [MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
    // ** for all routes that we don't recognize, 
    // Routes served from top to bottom so this should always come last!
    { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
