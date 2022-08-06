import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAplicacaoComponent } from './lista-aplicacao.component';

describe('ListaAplicacaoComponent', () => {
  let component: ListaAplicacaoComponent;
  let fixture: ComponentFixture<ListaAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAplicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
