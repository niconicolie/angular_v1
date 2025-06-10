import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EventsComponent } from "./components/events/events.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
    { path: 'list', component: ListRenderComponent },
    { path: 'events', component: EventsComponent},
    { path: 'list/:id', component: ItemDetailComponent }

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}