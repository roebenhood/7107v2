import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSeparatorComponent } from './about-separator.component';

describe('AboutSeparatorComponent', () => {
  let component: AboutSeparatorComponent;
  let fixture: ComponentFixture<AboutSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSeparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
