import {Component, OnDestroy, OnInit} from '@angular/core';
import {LaunchesService} from '../../../shared/services/launches.service';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {LaunchesInterface} from '../../../shared/models/launches.interface';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit, OnDestroy {
  launches: LaunchesInterface[];
  ngOnDestroy$ = new Subject();
  constructor(private launchesService: LaunchesService) { }

  ngOnInit(): void {
    this.launchesService.getLaunches().pipe(
      takeUntil(this.ngOnDestroy$),
      tap(data => {
        this.launches = data;
        console.log(this.launches);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }
}
