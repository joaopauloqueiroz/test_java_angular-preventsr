import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LogService} from "./services/log.service";
import { ListComponent } from './components/list/list.component'
import { FormsModule, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,MatNativeDateModule } from "@angular/material";
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterIpComponent } from './components/filter-ip/filter-ip.component';
import { SendArquiveComponent } from './components/send-arquive/send-arquive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    HeaderComponent,
    FiltersComponent,
    FilterIpComponent,
    SendArquiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgxMaskModule,
    MatDatepickerModule, 
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [LogService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
