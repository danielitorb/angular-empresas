import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Company } from '../models/company';

const endpoint = 'http://localhost/basic_page/public/ws/';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private companys: Company[];
  private cCompany: Company;
  private cUser = 1;

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) {}

  getAllCompanys(): Observable < Company[] > {
    return this._http.get < Company[] > (endpoint + 'empresas/', this.options)
      .pipe(
        tap(companys => {
          this.log('fetched companys');
          this.companys = companys;
        }),
        catchError(this.handleError('getCompanys', []))
      );
  }



  private handleError < T > (operation = 'operation', result ?: T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('CompanyService: ' + message);
  }

  setCCompany(company: Company) {
    this.cCompany = company;
  }


  getCCompany() {
    return this.cCompany;
  }

  setCompanys(companys: Company[]) {
    console.log('set Companys: ' + companys);
    this.companys = companys;
  }

  getCompanys(): Company[] {
    return this.companys;
  }

  addCompany(company: Company): void {
    this.companys.push(company);
  }

}
