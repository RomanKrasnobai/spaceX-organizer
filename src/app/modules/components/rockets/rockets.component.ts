import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import {Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import { RocketsInterface } from '../../../shared/models/rockets.interface';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketsComponent implements OnInit  {
  rockets: Observable<RocketsInterface[]>;
  setDate: FormControl = new FormControl();

  constructor(
    private rocketsService: RocketsService,
  ) { }

  ngOnInit(): void {
    this.rockets = this.rocketsService.getAllRockets();
  }

  showAllData(): void {
    this.setDate.setValue(null);
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
