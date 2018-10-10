import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatAutocompleteModule } from '@angular/material/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { AppComponent } from './app.component';
import { ListcompanyComponent } from './components/listcompany/listcompany.component';
import { FormcompanyComponent } from './components/formcompany/formcompany.component';
import { CompanyService } from './services/company.service';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FilterPipe } from './filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatInputModule, MatTableModule } from '@angular/material';

import { MatButtonModule, MatIconModule } from '@angular/material';



const appRoutes: Routes = [
  // {path: '', component: MainpageComponent},
  {path: '', component: ListcompanyComponent},
  {path: 'empresa', component: FormcompanyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListcompanyComponent,
    FormcompanyComponent,
    MainpageComponent,
    FilterPipe,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    CdkTreeModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
