import { Component, Input, OnInit } from '@angular/core';
import { MyArrayTypeButton } from '../login/login.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonText!: MyArrayTypeButton;

  ngOnInit(): void {
    this.buttonText.map((item) => {
      console.log(item.color);
    })
  }

}
