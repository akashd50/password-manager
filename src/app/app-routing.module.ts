import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLandingPageComponent} from "./app-landing-page/app-landing-page.component";

const routes: Routes = [
    { path: "", component: AppLandingPageComponent },
    /*{ path: "game", loadChildren: () => import('./web-gpu/web-gpu.module').then(m => m.WebGpuModule) }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
