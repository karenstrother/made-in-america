import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DropdownModule } from "./dropdown/dropdown.module";
import { AccordionModule, ROUTES as ACCORDION_ROUTES } from './accordion/accordion.module';
import { SearchModule, ROUTES as SEARCH_ROUTES } from './search/search.module';

const routes: Routes = [
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    DropdownModule,
    SearchModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
