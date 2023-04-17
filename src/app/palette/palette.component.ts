import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaintServices } from '../paints/paint.service';
import { Paint } from '../shared/models/paint.model';
import { Palette } from '../shared/models/palette.model';
import { PaletteService } from './palette.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';


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

paletteForm = this.formBuilder.group({
  name: ['', Validators.required],
  description: [''],
});

currentUser: any;



  constructor(private paletteService:PaletteService, private formBuilder: FormBuilder, private userService:UserService) { }

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

    this.currentUser = this.userService.currentUser

  }

  deletePaint(paint: Paint){
    this.paletteService.deletePaint(paint)
  }

  newPalette(){
    const formData = this.paletteForm.value;

    const palette: Palette = {
      name: formData.name?.trim() ?? '',
      description: formData.description?.trim() ?? '',
      user_id: this.currentUser.id
    }

    this.paletteService.createPalette(palette).subscribe((res:any) => {
    console.log(res)
    })
  }



  toggleMenu(){

  }

}
