import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette/palette.service';
import { Paint } from '../shared/models/paint.model';
import { PaintServices } from './paint.service';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.css']
})
export class PaintsComponent implements OnInit {

  paints: any;

  constructor(private paintService:PaintServices, private paletteService: PaletteService) { }

  ngOnInit(): void {
    this.paintService.getPaints().subscribe((res:any) => {
      console.log(res)
      this.paints = res
      console.log(res[0].pigments)
    })
  }

  onClick(paint: Paint){
    this.paletteService.addPaint(paint)
  }

}
