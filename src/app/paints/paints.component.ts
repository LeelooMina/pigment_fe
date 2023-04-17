import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette/palette.service';
import { ColorFamily } from '../shared/models/color_family.model';
import { Paint } from '../shared/models/paint.model';
import { PaintServices } from './paint.service';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css']
})
export class PaintsComponent implements OnInit {

  paints: any;
  colorFamilies: ColorFamily[] = [];
  selectedColor = "All";

  constructor(private paintService:PaintServices, private paletteService: PaletteService) { }

  ngOnInit(): void {
    this.paintService.getPaints().subscribe((res:any) => {
      console.log(res)
      this.paints = res
      console.log(res[0].pigments)
    })

    this.paintService.getColorFamilies().subscribe((res:any) => {
      this.colorFamilies = res
    })
  }

  onClick(paint: Paint){
    this.paletteService.addPaint(paint)
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  getPaintColor(paint: Paint): string {
    const colorFamily = this.colorFamilies.find(cf => cf.id === paint.color_family_id);
    return colorFamily ? colorFamily.swatch_url : 'white'; 
  }
}
