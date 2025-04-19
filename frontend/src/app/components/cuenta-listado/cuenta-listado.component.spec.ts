import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaListadoComponent } from './cuenta-listado.component';

describe('CuentaListadoComponent', () => {
  let component: CuentaListadoComponent;
  let fixture: ComponentFixture<CuentaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
