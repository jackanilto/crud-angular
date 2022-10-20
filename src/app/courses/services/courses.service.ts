import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Course[]>(this.API);
    first();
  }
}
