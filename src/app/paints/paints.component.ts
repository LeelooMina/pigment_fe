import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette/palette.service';
import { ColorFamily } from '../shared/models/color_family.model';
import { Paint } from '../shared/models/paint.model';
import { PaintServices } from './paint.service';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css'],
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
  ]),]
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

  selectColor(color: string, id: number) {
    this.selectedColor = color;
    this.paintService.filterPaintsByColor(id).subscribe((res: any) => {
      this.paints = res
    })
  }

  getPaintColor(paint: Paint): string {
    const colorFamily = this.colorFamilies.find(cf => cf.id === paint.color_family_id);
    return colorFamily ? colorFamily.swatch_url : 'white';
  }

  allColors(){
    this.paintService.getPaints().subscribe((res:any) => {
      console.log(res)
      this.paints = res
      console.log(res[0].pigments)
    })

  }


}
