import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CapsulesService} from '../../../shared/services/capsules.service';
import {Observable} from 'rxjs';
import {CapsulesInterface} from '../../../shared/models/capsules.interface';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapsulesComponent implements OnInit {
  capsules: Observable<CapsulesInterface[]>;

  constructor(
    private capsulesService: CapsulesService,
  ) { }

  ngOnInit(): void {
    this.getCapsules();
  }

  trackByFn(index, item): string {
    return item.capsule_id;
  }

  private getCapsules(): void {
    this.capsules = this.capsulesService.getAllCapsules();
  }

  getFilters(event): void {
    this.capsules = event;
  }

  clearFilters(event): void {
    if (event) {
      this.getCapsules();
    }
  }
}
