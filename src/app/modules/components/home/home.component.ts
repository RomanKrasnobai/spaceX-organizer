import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {InfoService} from 'src/app/shared/services/info.service';
import {Observable, Subject} from 'rxjs';
import {InfoInterface} from '../../../shared/models/about.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  spaceXInfo: Observable<InfoInterface>;

  constructor(
    private infoService: InfoService,
  ) { }

  ngOnInit(): void {
    this.spaceXInfo = this.infoService.getInfo();
  }
}
