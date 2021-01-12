import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {InfoService} from 'src/app/shared/services/info.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {InfoInterface} from '../../../shared/models/about.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  spaceXInfo: InfoInterface;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private infoService: InfoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.infoService.getInfo().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(data => {
      this.spaceXInfo = data;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

}
