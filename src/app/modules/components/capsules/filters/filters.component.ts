import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {CapsulesService} from '../../../../shared/services/capsules.service';
import {CapsulesInterface} from '../../../../shared/models/capsules.interface';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  capsulesStatuses = ['retired', 'unknown', 'active', 'destroyed'];
  capsulesSerialNums: [string];
  isHiddenCleanSerial = false;
  isHiddenCleanStatus = false;
  formFilters: FormGroup;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  @Input() capsules: Observable<CapsulesInterface[]>;
  @Output() emitSortBySerial = new EventEmitter();
  @Output() emitSortByStatus = new EventEmitter();
  @Output() emitClickClear = new EventEmitter<boolean>();

  constructor(
    private capsulesService: CapsulesService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCapsulesBySerial();
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  getControl(controlName: string): AbstractControl {
    return this.formFilters.get(controlName);
  }

  trackByFn(index, item): string {
    return item;
  }

  private getCapsulesBySerial(): void {
    this.capsulesService.getAllCapsules().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.capsulesSerialNums = req.map(serial => serial.capsule_serial);
      this.cdr.detectChanges();
    });
  }

  sortBySerial(event): void {
    this.capsulesService.getAllCapsules(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.emitSortBySerial.emit(of(req));
      this.cdr.detectChanges();
    });
    this.isHiddenCleanSerial = true;
  }

  sortByStatus(event): void {
    this.capsulesService.getCapsulesByStatus(event.value).pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(req => {
      this.emitSortByStatus.emit(of(req));
    });
    this.isHiddenCleanStatus = true;
  }

  clearControls(controlName: string): void {
    if (controlName === 'serial') {
      this.isHiddenCleanSerial = false;
      this.getControl(controlName).reset();
    } else if (controlName === 'status') {
      this.isHiddenCleanStatus = false;
      this.getControl(controlName).reset();
    }
    this.emitClickClear.emit(true);
  }

  private initForm(): void {
    this.formFilters = this.fb.group({
      serial: '',
      status: ''
    });
  }
}
