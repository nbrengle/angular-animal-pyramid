import { Component, OnInit } from '@angular/core';
import { PyramidRowService } from '../pyramid-row/pyramid-row.service'
import { PyramidRow } from '../pyramid-row/pyramid-row.model'

@Component({
  selector: 'pyramid',
  template: `
  <div class='pyramid' *ngFor="let row of rows">
    <pyramid-row [row]="row"> </pyramid-row>
  </div>
  `,
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  rows: Array<PyramidRow>;

  constructor(private pyramidRowService: PyramidRowService) {
      this.rows = pyramidRowService.getRows().reverse();
  }

  ngOnInit() {
  }

}
