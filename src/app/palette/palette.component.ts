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




paintArr: any;

paletteForm = this.formBuilder.group({
  name: ['', Validators.required],
  description: ['', Validators.required],
});

currentUser: any;

userPalettes: Palette[] = []


  currentPalette: Palette = {
    name: '',
    description: '',
    user_id: 0
  }



  constructor(private paletteService:PaletteService, private formBuilder: FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit(): void {

    this.currentUser = this.userService.currentUser
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

    this.paletteService.getUserPalettes(this.currentUser.id).subscribe((res:any) => {
      this.userPalettes = res
      this.userPalettes.reverse();
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
  this.paletteService.currentPalettePaints(palette.paints)
  console.log(palette)
  this.router.navigate(['/new-palette'], { state: { palette: palette, editMode: true } })

}

openEditPaletteModal(palette: Palette) {
  // Set the current palette and update the form values
  this.currentPalette = palette;
  this.paletteForm.setValue({
    name: palette.name,
    description: palette.description
  });

  // Show the modal
  // $('#editPaletteModal').modal('show');
}

// updatePalette(palette: Palette) {
//   // Update the current palette with the form values


//   palette.name = this.paletteForm.get('name').value;
//   this.currentPalette.description = this.paletteForm.get('description').value;

//   // Call the service to update the palette
//   this.paletteService.updatePalette(this.currentPalette).subscribe(() => {
//     // Close the modal and reload the palettes
//     $('#editPaletteModal').modal('hide');
//     this.loadUserPalettes();
//   });
}


