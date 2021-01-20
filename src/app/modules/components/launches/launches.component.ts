import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LaunchesService} from '../../../shared/services/launches.service';
import {Observable} from 'rxjs';
import {LaunchesInterface} from '../../../shared/models/launches.interface';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent implements OnInit {
  launches: Observable<LaunchesInterface[]>;

  constructor(
    private launchesService: LaunchesService,
  ) { }

  ngOnInit(): void {
    this.launches = this.launchesService.getLaunches();
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
