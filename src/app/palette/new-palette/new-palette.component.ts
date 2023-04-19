import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaintServices } from 'src/app/paints/paint.service';
import { Paint } from 'src/app/shared/models/paint.model';
import { Palette } from 'src/app/shared/models/palette.model';
import { PaletteService } from '../palette.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { ColorFamily } from 'src/app/shared/models/color_family.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-palette',
  templateUrl: './new-palette.component.html',
  styleUrls: ['./new-palette.component.css']
})
export class NewPaletteComponent implements OnInit {

  editMode = false;
  @Input() currentPalette!: Palette;

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

colorFamilies: ColorFamily[] = [];

currentUser: any;

  savePalette(){
    const formData = this.paletteForm.value;

  }

  constructor(private paletteService:PaletteService, private formBuilder: FormBuilder, private userService:UserService, private paintService:PaintServices, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paintArr = this.paletteService.currentPaints

    this.currentPalette = history.state.palette;
    console.log(this.currentPalette)





    this.paletteService.subscribeToNewPaints().subscribe((paints) => {
      this.paintArr = paints
      console.log(this.paintArr)
    })

    this.paintService.getColorFamilies().subscribe((res:any) => {
      this.colorFamilies = res
    })

    this.paletteService.subscribeToRemovePaints().subscribe((paints) => {
      this.paintArr = paints
      console.log(this.paintArr)
    });

    this.currentUser = this.userService.currentUser
  }


  getArray(length: number): any[] {
    return new Array(length);
  }

  getPaintColor(paint: Paint): string {
    const colorFamily = this.colorFamilies.find(cf => cf.id === paint.color_family_id);
    return colorFamily ? colorFamily.swatch_url : 'white';
  }

  deletePaint(paint: Paint){
    console.log(paint)
    this.paletteService.deletePaint(paint)
  }

  updatePalette(){
    const formData = this.paletteForm.value;

    const palette: Palette = {
      name: formData.name?.trim() ?? '',
      description: formData.description?.trim() ?? '',
      user_id: this.currentUser.id
    }

    this.paletteService.updatePalette(this.currentPalette.user_id, palette).subscribe((res:any) => {
    console.log(res)
    })
  }

  savePaints(){

    this.paletteService.savePalette(this.currentPalette)

  }



  toggleMenu(){

  }

}
