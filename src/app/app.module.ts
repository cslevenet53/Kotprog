import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { environment } from 'src/environments/environment';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sales/sale/sale.component';
import { SaleListComponent } from './sales/sale-list/sale-list.component';
import { SaleService } from './shared/sale.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SaleComponent,
    SaleListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatIconModule,
    MatSliderModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
