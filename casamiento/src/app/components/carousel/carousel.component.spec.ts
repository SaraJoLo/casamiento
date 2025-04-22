import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaurroselComponent } from './carousel.component';

describe('CaurroselComponent', () => {
  let component: CaurroselComponent;
  let fixture: ComponentFixture<CaurroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaurroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaurroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
