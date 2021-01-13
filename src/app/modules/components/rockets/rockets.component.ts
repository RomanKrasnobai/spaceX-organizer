import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { RocketsInterface } from '../../../shared/models/rockets.interface';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketsComponent implements OnInit, OnDestroy  {
  rockets: RocketsInterface[];
  setDate: FormControl = new FormControl();
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private rocketsService: RocketsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.rocketsService.getAllRockets()
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(req => {
        this.rockets = req;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  showAllData(): void {
    this.setDate.setValue(null);
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
