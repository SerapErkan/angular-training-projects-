import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivederComponent } from './diveder.component';

describe('DivederComponent', () => {
  let component: DivederComponent;
  let fixture: ComponentFixture<DivederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
