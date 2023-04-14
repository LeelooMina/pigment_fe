import { Component, OnInit } from '@angular/core';
import { PaintServices } from '../paints/paint.service';
import { Paint } from '../shared/models/paint.model';
import { PaletteService } from './palette.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

// paletteColors: any;


paletteColors = [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",

]

menuNav = []

menuToggle = false;

paintTest: Paint[] = []


  constructor(private paletteService:PaletteService) { }

  ngOnInit(): void {
    this.paletteService.subscribeToNewPaints().subscribe((paint: Paint) => {
      this.paintTest.push(paint)
    })
  }

  toggleMenu(){

  }

}
