import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DragonsService} from 'src/app/shared/services/dragons.service';
import {Observable} from 'rxjs';
import {DragonsInterface} from '../../../shared/models/dragons.interface';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonsComponent implements OnInit {
  dragons: Observable<DragonsInterface[]>;
  constructor(
    private dragonsService: DragonsService,
  ) { }

  ngOnInit(): void {
    this.dragons = this.dragonsService.getAllDragons();
  }

  trackByFn(index, item): string {
    return item.id;
  }
}
