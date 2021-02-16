import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RocketsComponent } from './rockets.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {HttpClientModule} from '@angular/common/http';

describe('RocketsComponent', () => {
  let component: RocketsComponent;
  let fixture: ComponentFixture<RocketsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
      ],
      declarations: [ RocketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)?.toBeTruthy();
  });
});
