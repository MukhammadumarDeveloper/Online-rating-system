import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oquvchi',
  templateUrl: './oquvchi.component.html',
  styleUrls: ['./oquvchi.component.css']
})
export class OquvchiComponent implements OnInit {

  @Input() ism_sharif: string;
  @Input() togri_javob: any;
  @Input() samaradorlik: string;
  @Input() ustun: any;
  @Input() yulduz: number;

  @Output() oquvchiClick = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

}
