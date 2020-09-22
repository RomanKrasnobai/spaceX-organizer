import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from 'src/app/shared/services/info.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  spaceXInfo;
  ngOnDestroy$ = new Subject();
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo().pipe(
      takeUntil(this.ngOnDestroy$),
      tap(data => this.spaceXInfo = data)
    ).subscribe();
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

}
