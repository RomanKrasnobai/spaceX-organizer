import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CapsulesService} from '../../../shared/services/capsules.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CapsulesInterface} from '../../../shared/models/capsules.interface';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapsulesComponent implements OnInit, OnDestroy {
  capsules: CapsulesInterface[];
  capsulesSerialNum;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private capsulesService: CapsulesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.capsules = req;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  trackByFn(index, item): string {
    return item.capsule_id;
  }

  getFilterBySerial(event) {
    this.capsules = event;
  }
}
