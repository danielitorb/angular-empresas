import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Company } from '../models/company';

const endpoint = 'http://localhost/basic_page/public/ws/';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private scompany: Company;

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) {}

  findLessons(
    courseId: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Company[]> {

    return this._http.get(endpoint + 'empresas/', {
        params: new HttpParams()
            .set('id', courseId.toString())
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
        map(res =>  res['payload'])
    );
}


getComp(): Observable<Company[]> {
  return this._http.get<Company[]>(endpoint + 'empresas/');
}

  getCompanys(): Observable < Company[] > {
    return this._http.get < Company[] > (endpoint + 'empresas/', this.options)
      .pipe(
        tap(companys => this.log('fetched companys')),
        catchError(this.handleError('getCompanys', []))
      );
  }

  /** GET company by ruc. Will 404 if id not found */
  getCompany(id: number): Observable < Company > {
    const url = endpoint + 'empresa/' + id;
    return this._http.get < Company > (url).pipe(
      tap(_ => this.log(`fetched Company companyid=${id}`)),
      catchError(this.handleError < Company > (`getCompany companyid=${id}`))
    );
  }

  /** DELETE company by ruc. Will 404 if id not found */
  deleteCompany(id: number): Observable < Company > {
    const url = endpoint + 'empresa/' + id;
    return this._http.delete < Company > (url, this.options).pipe(
      tap(_ => this.log(`deleted company companyid=${id}`)),
      catchError(this.handleError < Company > ('deleteCompany'))
    );
  }

  /** POST: add a new hero to the server */
  createCompany (company: Company): Observable<Company> {
    return this._http.post<Company>(endpoint + 'empresa/', company, this.options).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((company: Company) => this.log(`added company w/ ruc=${company.id}`)),
      catchError(this.handleError<Company>('addCompany'))
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

  setSCompany(company: Company) {
    this.scompany = company;
  }


  getSCompany() {
    return this.scompany;
  }

  // setSCompany(company:Company){
  //   this.scompany=company;
  // }


  // getSCompany(){
  //   return this.scompany;
  // }

}
