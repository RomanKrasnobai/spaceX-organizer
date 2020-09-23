import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  navigation = [
    { title: 'Home', link: '/home' },
    { title: 'Rockets', link: '/rockets' },
    { title: 'Capsules', link: '/capsules' },
    { title: 'Dragons', link: '/dragons' },
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
