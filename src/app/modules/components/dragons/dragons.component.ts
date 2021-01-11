import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragonsService } from 'src/app/shared/services/dragons.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DragonsInterface } from '../../../shared/models/dragons.interface';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit, OnDestroy {
  dragons: DragonsInterface[];
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(private dragonsService: DragonsService) { }

  ngOnInit(): void {
    this.dragonsService.getAllDragons().pipe(
      takeUntil(this.ngOnDestroy$),
      tap(req => {
        this.dragons = req;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }
}
