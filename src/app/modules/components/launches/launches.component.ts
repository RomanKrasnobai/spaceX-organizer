import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {LaunchesService} from '../../../shared/services/launches.service';
import {Subject} from 'rxjs';
import {LaunchesInterface} from '../../../shared/models/launches.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent implements OnInit, OnDestroy {
  launchesDataSource: MatTableDataSource<LaunchesInterface[]>;
  displayedColumns: string[] = ['flight_number', 'mission_name', 'launch_year'];

  isShowSpinner: boolean;

  private ngOnDestroy$: Subject<null> = new Subject<null>();

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (mp !== undefined) {
      this.launchesDataSource.paginator = mp;
    }
  }

  @ViewChild(MatSort) set matSort(sr: MatSort) {
    if (sr !== undefined) {
      this.launchesDataSource.sort = sr;
    }
  }

  constructor(
    private launchesService: LaunchesService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.launchesService.getLaunches()
    .pipe(
      takeUntil(this.ngOnDestroy$)
    ).subscribe(
    req => {
      this.launchesDataSource = new MatTableDataSource<LaunchesInterface[]>(req);
      this.isShowSpinner = !!this.launchesDataSource?.filteredData.length;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.launchesDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
