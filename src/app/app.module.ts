import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { convertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './product/welcome.component';
import { ProductGuardService } from './product/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'products', component: ProductListComponent},
    {path: 'products/:id',
    canActivate: [ ProductGuardService], component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '' , redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ])
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }