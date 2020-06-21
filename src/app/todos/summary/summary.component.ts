import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent implements OnInit {
  @Input() total:number
  @Input() todo:number
  @Input() completed:number

  constructor() { }

  ngOnInit(): void {
  }

}
