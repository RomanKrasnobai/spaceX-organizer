import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DragonsComponent } from './dragons.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {HttpClientModule} from '@angular/common/http';

describe('DragonsComponent', () => {
  let component: DragonsComponent;
  let fixture: ComponentFixture<DragonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
      ],
      declarations: [ DragonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)?.toBeTruthy();
  });
});
