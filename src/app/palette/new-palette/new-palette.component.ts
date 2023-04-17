import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-palette',
  templateUrl: './new-palette.component.html',
  styleUrls: ['./new-palette.component.css']
})
export class NewPaletteComponent implements OnInit {

  paletteForm = new FormGroup({
    description: new FormControl(''),
    name: new FormControl(''),

  })


  savePalette(){
    const formData = this.paletteForm.value;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
