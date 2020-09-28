import {Component, OnDestroy, OnInit} from '@angular/core';
import {CapsulesService} from '../../../shared/services/capsules.service';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {CapsulesInterface} from '../../../shared/models/capsules.interface';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit, OnDestroy {
  capsules: CapsulesInterface[];
  ngOnDestroy$ = new Subject();
  isHiddenClean = false;

  constructor(private capsulesService: CapsulesService) { }

  ngOnInit() {
    this.getCapsules();
  }

  getCapsules() {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
      tap(req => this.capsules = req)
    ).subscribe();
  }

  selectSerial(event) {
    this.capsulesService.getAllCapsules(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
      tap(req => this.capsules = req)
    ).subscribe();

    this.isHiddenClean = true;
  }

  cleanSetSerial() {
    this.getCapsules();
    this.isHiddenClean = false;
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next();
    this.ngOnDestroy$.complete();
  }
}
