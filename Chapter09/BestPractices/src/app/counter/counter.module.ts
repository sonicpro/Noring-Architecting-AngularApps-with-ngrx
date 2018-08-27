import { NgModule } from "@angular/core";

import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";

import { counterReducer } from "./counter.reducer";

@NgModule({
  imports: [BrowserModule,
    StoreModule.forFeature("counterKeyModified", counterReducer)], // defines the name of the feature state and the reducer function.
  exports: [CounterComponent],
  declarations: [CounterComponent],
  providers: []
})
export class CounterModule {}
