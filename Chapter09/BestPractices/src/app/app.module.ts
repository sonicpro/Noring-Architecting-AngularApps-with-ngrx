import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { JediModule } from "./jedi/jedi.module";
import { CounterModule } from "./counter/counter.module";
import { jediListReducer } from "./jedi/jedi-list/jedi-list.reducer";
import { counterReducer } from "./counter/counter.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      jedisKeyModified: jediListReducer, // jedisKeyModified property is added to the global state and has a type of jedyListReducer function.
      counterKeyModified: counterReducer
    }),
    JediModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
