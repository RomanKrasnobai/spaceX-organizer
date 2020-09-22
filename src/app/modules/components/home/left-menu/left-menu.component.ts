import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  navigation = [
    {title: 'Home', link: '/home'},
    {title: 'Rockets', link: '/rockets'},
    {title: 'Dragons', link: '/dragons'},
  ];
  currentPath: boolean;
  constructor() { }

  ngOnInit(): void {

  }

}
