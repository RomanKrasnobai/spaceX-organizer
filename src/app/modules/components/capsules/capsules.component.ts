import {Component, OnDestroy, OnInit} from '@angular/core';
import {CapsulesService} from '../../../shared/services/capsules.service';
import { Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CapsulesInterface} from '../../../shared/models/capsules.interface';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit, OnDestroy {
  capsules: CapsulesInterface[];
  capsulesStatuses = ['retired', 'unknown', 'active', 'destroyed'];
  private ngOnDestroy$: Subject<null> = new Subject<null>();
  isHiddenCleanSerial = false;
  isHiddenCleanStatus = false;

  constructor(private capsulesService: CapsulesService) { }

  ngOnInit(): void {
    this.getCapsules();
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  getCapsules(): void {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
  }

  sortBySerial(event): void {
    this.capsulesService.getAllCapsules(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
    this.isHiddenCleanSerial = true;
  }

  cleanSortBySerial(): void {
    this.getCapsules();
    this.isHiddenCleanSerial = false;
  }

  sortByStatus(event): void {
    this.capsulesService.getCapsulesByStatus(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
    this.isHiddenCleanStatus = true;
  }

  cleanSortByStatus(): void {
    this.getCapsules();
    this.isHiddenCleanStatus = false;
  }
}
