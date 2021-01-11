import { Component, OnInit, OnDestroy } from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { RocketsInterface } from '../../../shared/models/rockets.interface';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit, OnDestroy  {
  rockets: RocketsInterface[];
  setDate = new FormControl();
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private rocketsService: RocketsService,
  ) { }

  ngOnInit(): void {
    this.rocketsService.getAllRockets().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.rockets = req);
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  showAllData(): void {
    this.setDate.setValue(null);
  }
}
