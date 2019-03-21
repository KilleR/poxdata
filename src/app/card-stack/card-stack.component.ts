import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'pox-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {

  faction = 'FW';
  hash='ej9Fj9EF0BE8De9AE8DJ8IJ8Jolneinyojyxmnn';

  @Input() rarity: string;

  constructor(private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

}
