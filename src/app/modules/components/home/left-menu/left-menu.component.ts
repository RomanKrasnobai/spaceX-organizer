import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  navigation = [
    {title: 'Rockets', link: '/rockets'},
    {title: 'Dragons', link: '/dragons'},
  ];
  currentPath: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url === '/home';
      }
    });
  }

}
