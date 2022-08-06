import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAplicacaoComponent } from './nova-aplicacao.component';

describe('NovaAplicacaoComponent', () => {
  let component: NovaAplicacaoComponent;
  let fixture: ComponentFixture<NovaAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaAplicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
