import {Component, OnDestroy, OnInit} from '@angular/core';
import {CapsulesService} from '../../../shared/services/capsules.service';
import {Observable, Observer, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {CapsulesInterface} from '../../../shared/models/capsules.interface';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit, OnDestroy {
  capsules: CapsulesInterface[];
  capsulesStatuses = ['retired', 'unknown', 'active', 'destroyed'];
  ngOnDestroy$: Subject<null> = new Subject();
  isHiddenCleanSerial = false;
  isHiddenCleanStatus = false;

  constructor(private capsulesService: CapsulesService) { }

  ngOnInit() {
    this.getCapsules();
  }

  getCapsules() {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
  }

  sortBySerial(event) {
    this.capsulesService.getAllCapsules(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
    this.isHiddenCleanSerial = true;
  }

  cleanSortBySerial() {
    this.getCapsules();
    this.isHiddenCleanSerial = false;
  }

  sortByStatus(event) {
    this.capsulesService.getCapsulesByStatus(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
    this.isHiddenCleanStatus = true;
  }

  cleanSortByStatus() {
    this.getCapsules();
    this.isHiddenCleanStatus = false;
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next();
    this.ngOnDestroy$.complete();
  }
}
