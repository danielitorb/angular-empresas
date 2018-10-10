
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Company} from '../models/company';
import {map} from 'rxjs/operators';

const endpoint = 'http://localhost/basic_page/public/ws/';

@Injectable()
export class CoursesService {

    constructor(private http: HttpClient) {

    }

    findCourseById(courseId: number): Observable<Company> {
        return this.http.get<Company>(endpoint + 'empresas/${courseId}');
    }

    findAllCourses(): Observable<Company[]> {
        return this.http.get(endpoint + 'empresas/')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllCourseLessons(courseId: number): Observable<Company[]> {
        return this.http.get(endpoint + 'empresas/', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('pageNumber', '0')
                .set('pageSize', '1000')
        }).pipe(
            map(res =>  res['payload'])
        );
    }

    findLessons(
        courseId: number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Company[]> {

        return this.http.get(endpoint + 'empresas/', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res['payload'])
        );
    }
}
