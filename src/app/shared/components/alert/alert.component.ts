import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AlertMessageService} from '../../services/alert-message.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnDestroy {
  alertMessage: string;
  isVisible = false;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private alertMessageService: AlertMessageService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.alertMessageService.sharedAlertMessage
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(message => {
        this.alertMessage = message;
        this.isVisible = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.isVisible = false;
          this.cdr.detectChanges();
        }, 2000);
      });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }
}
