import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreggateComponent } from './aggregate.component';

describe('AgreggateComponent', () => {
  let component: AgreggateComponent;
  let fixture: ComponentFixture<AgreggateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreggateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreggateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
