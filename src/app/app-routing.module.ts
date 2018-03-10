import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent, PageNotFoundComponent, WritingComponent } from "./pages";

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "writing", component: WritingComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true})
    ]
})

export class AppRoutingModule { }
