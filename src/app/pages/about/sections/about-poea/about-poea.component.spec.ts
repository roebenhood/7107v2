import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPoeaComponent } from './about-poea.component';

describe('AboutPoeaComponent', () => {
  let component: AboutPoeaComponent;
  let fixture: ComponentFixture<AboutPoeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPoeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPoeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
