import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Suscripcion } from '../models/suscripcion.enum';
import { passwordValidation } from '../validations/password-validation.directive';
import { UsernameUnicoService } from '../validations/username-unico.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //FormBuilder-> para tener un modelo con los campos del formulario //reactivo
  constructor(private formBuilder: FormBuilder, private usernameUnicoService: UsernameUnicoService) { }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get telefonos(){
    //formulario dinamico ///FormArray xq get devuelve un control absatacto 
    return this.registerForm.get('telefonos') as FormArray;
  }
  
  //crear el modelo con los campos del formulario con sus validaciones //reactivo
  registerForm = this.formBuilder.group({
    // inicialmente se cre asi con sus valores por defecto
    // username:[''],
    // password: [''],
    // suscripcion: [Suscripcion.Basica],
    // promociones: [true],

    username: ['', {
      validators: [Validators.required],
      //validacion asyncorna reactivo 
      asyncValidators: [this.usernameUnicoService.validate.bind(this.usernameUnicoService)],
      updateOn: 'blur'
    }],
    password: ['', {
      ///Validacion sincrroa reactivo --> passwordValidation la funcion creada para validar el pass 
      validators: [Validators.required, Validators.minLength(4), passwordValidation()]
    }],
    suscripcion: [Suscripcion.Basica],
    promociones: [true],
    //formulario dinamico
    telefonos: this.formBuilder.array([])
  });

  suscripciones: any[] = [];
  ngOnInit() {
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
  }

  //formulario dinamico // creando el formulario 
  agregarTelefono(){
    const telefonoFormGroup  = this.formBuilder.group({
      telefono: '',
      descripcion: ''
    });
    this.telefonos.push(telefonoFormGroup);
  }
//formulario dinamico // removiendo x indice 
  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  submit() {

    if (!this.registerForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }

    console.log(this.registerForm.value);
  }

  limpiar() {
    // inicialmente se cre asi con sus valores por defecto //reactivo
    this.registerForm.patchValue({
      username: '',
      password: '',
      suscripcion: Suscripcion.Basica,
      promociones: true
    });
    //formulario dinamico // removiendo x indice
    this.telefonos.controls.splice(0, this.telefonos.length);
  }


}
