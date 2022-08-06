import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nova-aplicacao',
  templateUrl: './nova-aplicacao.component.html',
  styleUrls: ['./nova-aplicacao.component.scss'],
})
export class NovaAplicacaoComponent implements OnInit {
  form: FormGroup;
  mode: 'create' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public _defaults: any,
    private _dialogRef: MatDialogRef<NovaAplicacaoComponent>,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.init();
    this.formBuild();
  }

  private formBuild() {
    this.form = this._fb.group({
      id: [''],
      nome: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ],
      url: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ],
      sistemaId: [this._defaults.sistemaId, Validators.required],
    });
  }

  init() {
    if (this._defaults.id != null) {
    }
    this.loadAtivo();
  }

  private loadAtivo() {}

  isCreateMode() {
    return this.mode === 'create';
  }
  save() {
    if (this.isCreateMode()) {
      this.criarAplicacao();
    }
  }

  criarAplicacao() {
    //tratar erros
  }
}
