import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {InfoService} from '../../../shared/services/info.service';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let infoService: InfoService;
  let spy: jasmine.Spy;
  let spaceXInfo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
      ],
      declarations: [ HomeComponent, LeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    infoService = fixture.debugElement.injector.get(infoService);

    spaceXInfo = {
      name: 'SpaceX',
      ceo: 'Elon Musk',
      coo: 'Gwynne Shotwell',
      cto_propulsion: 'Tom Mueller',
      employees: '7000',
      founded: '2002',
      summary: 'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.'
    };

    spy = spyOn(infoService, 'getInfo').and.returnValue(spaceXInfo);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call infoService', () => {
    expect(spy.calls.any).toBeTruthy();
  });
});
