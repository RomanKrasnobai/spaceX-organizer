import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from 'src/app/shared/services/info.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {InfoInterface} from '../../../shared/models/about.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  spaceXInfo: InfoInterface;
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo().pipe(
      takeUntil(this.ngOnDestroy$),
    ).subscribe(data => this.spaceXInfo = data);
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

}
