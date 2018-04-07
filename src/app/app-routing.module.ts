import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { 
    BlogComponent, CodeComponent, HomeComponent, PageNotFoundComponent, 
    PhotographyComponent, WritingComponent 
} from "./pages";



const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "writing", component: WritingComponent },
    { path: "code", component: CodeComponent },
    { path: "photography", component: PhotographyComponent },
    { path: "blog", component: BlogComponent },
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
