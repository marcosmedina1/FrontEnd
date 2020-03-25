import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../assets/models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  autos: Automovil[];
  constructor() { }

  ngOnInit(): void {
  }

}
