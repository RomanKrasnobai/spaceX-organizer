import { Component, OnInit, OnDestroy } from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit, OnDestroy  {
  rockets: any;
  ngOnDestroy$ = new Subject();
  setDate = new FormControl();

  constructor(
    private rocketsService: RocketsService,
    ) { }

  ngOnInit(): void {
    this.rocketsService.getAllRockets().pipe(
      takeUntil(this.ngOnDestroy$),
      tap(req => {this.rockets = req; console.log(req)})
    ).subscribe();
  }

  showAllData() {
    this.setDate.setValue(null);
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }
}
