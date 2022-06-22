import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPortafolioComponent } from './footer-portafolio.component';

describe('FooterPortafolioComponent', () => {
  let component: FooterPortafolioComponent;
  let fixture: ComponentFixture<FooterPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
