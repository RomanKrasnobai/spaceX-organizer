import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LaunchesService} from '../../../shared/services/launches.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LaunchesInterface} from '../../../shared/models/launches.interface';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent implements OnInit, OnDestroy {
  launches: LaunchesInterface[];
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private launchesService: LaunchesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.launchesService.getLaunches().pipe(
      takeUntil(this.ngOnDestroy$)
    ).subscribe(data => {
      this.launches = data;
      this.cdr.detectChanges();
      console.log(this.launches);
    });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
