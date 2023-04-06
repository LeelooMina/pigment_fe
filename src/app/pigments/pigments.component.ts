import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-pigments',
  templateUrl: './pigments.component.html',
  styleUrls: ['./pigments.component.css']
})
export class PigmentsComponent implements OnInit {

  baseUrl = 'http://localhost:3000/api/v1/pigments/'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getCourses() {
    return this.http.get(this.baseUrl + 'list');
  }

}
