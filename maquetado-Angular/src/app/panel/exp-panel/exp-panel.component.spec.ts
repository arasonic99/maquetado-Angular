import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPanelComponent } from './exp-panel.component';

describe('ExpPanelComponent', () => {
  let component: ExpPanelComponent;
  let fixture: ComponentFixture<ExpPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
