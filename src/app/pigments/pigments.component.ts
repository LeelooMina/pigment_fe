import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PigmentsServices } from './pigments.service';

@Component({
  selector: 'app-pigments',
  templateUrl: './pigments.component.html',
  styleUrls: ['./pigments.component.css']
})
export class PigmentsComponent implements OnInit {

  baseUrl = 'http://localhost:3000/api/v1/pigments/'

  pigments: any;

  constructor(private http: HttpClient, private pigmentsService:PigmentsServices) { }

  ngOnInit(): void {
    this.pigmentsService.getPigments().subscribe((res:any) => {
      console.log(res)
      this.pigments = res
    })

  }



}
