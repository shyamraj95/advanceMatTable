import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDataTableComponent } from './advance-data-table.component';

describe('AdvanceDataTableComponent', () => {
  let component: AdvanceDataTableComponent;
  let fixture: ComponentFixture<AdvanceDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
