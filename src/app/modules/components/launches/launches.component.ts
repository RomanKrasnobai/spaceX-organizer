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
export class LaunchesComponent implements OnInit, AfterViewInit, OnDestroy {
  // launches: Observable<LaunchesInterface[]>;
  launchesDataSource = new MatTableDataSource<LaunchesInterface[]>();
  displayedColumns: string[] = ['flight_number', 'mission_name', 'launch_year'];

  private ngOnDestroy$: Subject<null> = new Subject<null>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.launchesDataSource.paginator = this.paginator;
    this.launchesDataSource.sort = this.sort;
    this.cdr.detectChanges();
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
