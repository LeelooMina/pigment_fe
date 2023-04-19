import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaintServices } from '../paints/paint.service';
import { Paint } from '../shared/models/paint.model';
import { Palette } from '../shared/models/palette.model';
import { PaletteService } from './palette.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
  animations: [  trigger('fadeInOut', [
    transition(':enter', [
      // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      // :leave is alias to '* => void'
      animate(500, style({ opacity: 0 })),
    ]),
  ]),],

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

userPalettes: Palette[] = []



  constructor(private paletteService:PaletteService, private formBuilder: FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit(): void {

    this.getUserPalettes();



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

    this.router.navigate(['/new-palette'], { state: { palette: res } });

    })
  }

  getUserPalettes(){

    this.paletteService.getUserPalettes(1).subscribe((res:any) => {
      this.userPalettes = res
      console.log(this.userPalettes)
    })
  }

  deletePalette(palette: Palette){
    if(palette.id){
    const id = palette.id
    this.paletteService.deletePalette(id).subscribe(() => {
      this.paletteService.deleteAllPaint(id).subscribe(() => {
        this.getUserPalettes();
      })
    });
  }

  }

editPalette(palette: Palette){

}

}
