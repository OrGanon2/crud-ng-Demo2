import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


// courses:Course[] = [];


  constructor(private http: HttpClient) { 
    // this.courses = [
    
    // ];

  }

  getCourses(){
    return this.http.get('http://localhost:3000/courses')
  }
}

  // {id :1, name:'Course1', desc:'fdfddf', isActive:true, price:100, updatedAt: new Date('2022-04-07')},
      // {id :2, name:'Course2', desc:'dkshfkjhk', isActive:false, price:200, updatedAt: new Date('2022-04-07')},
      // return this.courses