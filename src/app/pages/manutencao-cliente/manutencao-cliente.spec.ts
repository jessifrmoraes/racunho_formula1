import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManutencaoCliente } from './manutencao-cliente';

describe('ManutencaoCliente', () => {
  let component: ManutencaoCliente;
  let fixture: ComponentFixture<ManutencaoCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoCliente],
    }).compileComponents();

    fixture = TestBed.createComponent(ManutencaoCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
