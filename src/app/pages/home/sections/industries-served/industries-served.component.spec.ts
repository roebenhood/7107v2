import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesServedComponent } from './industries-served.component';

describe('IndustriesServedComponent', () => {
  let component: IndustriesServedComponent;
  let fixture: ComponentFixture<IndustriesServedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesServedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesServedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
