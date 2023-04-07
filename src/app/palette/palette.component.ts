import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

 // First array
rainbowColors1 = [
  '#E57373', // Light red
  '#FFB74D', // Peach
  '#FFF176', // Light yellow
  '#81C784', // Light green
  '#64B5F6', // Light blue
  '#9575CD', // Muted purple
];

// Second array
rainbowColors2 = [
  '#F48FB1', // Light pink
  '#CE93D8', // Lavender
  '#B39DDB', // Muted violet
  '#80DEEA', // Light turquoise
  '#FFF59D', // Pale yellow
  '#FFAB91', // Light orange
];



  constructor() { }

  ngOnInit(): void {
  }

}
