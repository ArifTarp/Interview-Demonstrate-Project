import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

import { NewStudent } from "../models/newStudent";
import { AlertifyService } from "./alertify.service";
import { Observable } from "rxjs";

import { Student } from "../models/student";

@Injectable({
    providedIn: "root"
})
export class StudentService {
    path = "https://localhost:44332/api/";

    constructor(private httpClient: HttpClient, private router: Router, private alertifyService: AlertifyService) { }

    public addStudent(newStudent: NewStudent): void {
        this.httpClient.post<NewStudent>(this.path + "students/add", newStudent).subscribe(data => {
            this.alertifyService.success("Registrary of the student named " + data.firstName + " " + data.lastName + " is successful");
        },error=>{
            this.alertifyService.error("Registrary of the student is unsuccessful");
        });
    }

    public getStudents(): Observable<Student[]> {
        return this.httpClient.get<Student[]>(this.path + "students/getAllWithAddress/");
    }

    public deleteStudent(studentId: number): void {
        this.httpClient.delete(this.path + "students/delete/" + studentId).subscribe(data=>{
          this.alertifyService.error("The student is deleted successful");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        },error=>{
            this.alertifyService.error("The student is deleted unsuccessful");
        });
    }

    public updateStudent(newStudent: NewStudent): void {
        this.httpClient.put<NewStudent>(this.path + "students/update", newStudent).subscribe(data => {
            this.alertifyService.success("Update of the student named " + data.firstName + " " + data.lastName + " is successful");
        },error=>{
            this.alertifyService.error("Update of the student is unsuccessful");
        });
    }
}
