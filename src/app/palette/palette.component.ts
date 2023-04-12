import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

paletteColors = [
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
];

menuNav = []

menuToggle = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){

  }

}
