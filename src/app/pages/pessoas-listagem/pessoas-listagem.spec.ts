import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasListagem } from './pessoas-listagem';

describe('PessoasListagem', () => {
  let component: PessoasListagem;
  let fixture: ComponentFixture<PessoasListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasListagem],
    }).compileComponents();

    fixture = TestBed.createComponent(PessoasListagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
