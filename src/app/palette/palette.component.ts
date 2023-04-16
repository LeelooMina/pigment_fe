import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

paintArr: any;

paletteForm = new FormGroup({
  description: new FormControl(''),
  name: new FormControl(''),

})




  constructor(private paletteService:PaletteService) { }

  ngOnInit(): void {
    this.paintArr = this.paletteService.currentPaints
    this.paletteService.subscribeToNewPaints().subscribe((paints) => {
      this.paintArr = paints
      console.log(this.paintArr)
    })

    this.paletteService.subscribeToRemovePaints().subscribe((paints) => {
      this.paintArr = paints
      console.log(this.paintArr)
    });


  }

  deletePaint(paint: Paint){
    this.paletteService.deletePaint(paint)
  }

  savePalette(){
    const formData = this.paletteForm.value;

  }



  toggleMenu(){

  }

}
