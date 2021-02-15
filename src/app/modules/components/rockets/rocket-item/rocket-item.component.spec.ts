import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketItemComponent } from './rocket-item.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {UpperCasePipe} from '@angular/common';
import {ShowByDatePipe} from '../../../../shared/pipes/show-by-date.pipe';

describe('RocketItemComponent', () => {
  let component: RocketItemComponent;
  let fixture: ComponentFixture<RocketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ActivatedRoute,
        UpperCasePipe,
        ShowByDatePipe,
      ],
      declarations: [ RocketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)?.toBeTruthy();
  });
});
