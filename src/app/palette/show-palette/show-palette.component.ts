import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { PaintServices } from 'src/app/paints/paint.service';
import { ColorFamily } from 'src/app/shared/models/color_family.model';
import { Paint } from 'src/app/shared/models/paint.model';
import { Palette } from 'src/app/shared/models/palette.model';
import { PaletteService } from '../palette.service';


@Component({
  selector: 'app-show-palette',
  templateUrl: './show-palette.component.html',
  styleUrls: ['./show-palette.component.css']
})
export class ShowPaletteComponent implements OnInit {

  @Input() palette: Palette | undefined;


colorFamilies: ColorFamily[] = [];

currentUser: any;


paintArr: any;




  constructor(private paletteService:PaletteService, private userService:UserService, private paintService:PaintServices) { }

  ngOnInit(): void {
    this.paintArr = this.palette?.paints

    this.paintService.getColorFamilies().subscribe((res:any) => {
      this.colorFamilies = res
    })
  }


  getPaintColor(paint: Paint): string {
    const colorFamily = this.colorFamilies.find(cf => cf.id === paint.color_family_id);
    return colorFamily ? colorFamily.swatch_url : 'white';
  }

  getArray(length: number): any[] {
    return new Array(length);
  }

}
