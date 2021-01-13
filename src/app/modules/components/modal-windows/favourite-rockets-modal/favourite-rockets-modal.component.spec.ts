import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteRocketsModalComponent } from './favourite-rockets-modal.component';

describe('FavouriteRocketsModalComponent', () => {
  let component: FavouriteRocketsModalComponent;
  let fixture: ComponentFixture<FavouriteRocketsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteRocketsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteRocketsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
