import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInForComponent } from './hero-in-for.component';

describe('HeroInForComponent', () => {
  let component: HeroInForComponent;
  let fixture: ComponentFixture<HeroInForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
