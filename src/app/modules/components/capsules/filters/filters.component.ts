import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {CapsulesService} from '../../../../shared/services/capsules.service';
import {CapsulesInterface} from '../../../../shared/models/capsules.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() capsules: CapsulesInterface[];
  @Output() emitSerialFilter = new EventEmitter();

  capsulesStatuses = ['retired', 'unknown', 'active', 'destroyed'];
  capsulesSerialNums;
  isHiddenCleanSerial = false;
  isHiddenCleanStatus = false;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private capsulesService: CapsulesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getCapsulesBySerial();
  }

  trackByFn(index, item): string {
    return item;
  }

  trackByFnStatus(index, item): string {
    return item;
  }

  getCapsulesBySerial() {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.capsules = req;
      this.capsulesSerialNums = req.map(serial => serial.capsule_serial);
      this.cdr.detectChanges();
    });
  }

  sortBySerial(event): void {
    this.capsulesService.getAllCapsules(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.capsules = req;
      this.emitSerialFilter.emit(req);
      this.cdr.detectChanges();
    });
    this.isHiddenCleanSerial = true;
  }

  cleanSortBySerial(): void {
    // this.getCapsules();
    this.isHiddenCleanSerial = false;
  }

  sortByStatus(event): void {
    this.capsulesService.getCapsulesByStatus(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => this.capsules = req);
    this.isHiddenCleanStatus = true;
  }

  cleanSortByStatus(): void {
    // this.getCapsules();
    this.isHiddenCleanStatus = false;
  }

}
