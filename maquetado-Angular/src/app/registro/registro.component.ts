import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
form: FormGroup;
  constructor(private formBuilder: FormBuilder){
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
  });
}

ngOnInit() {}

  get Mail(){
    return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }

  get MailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      alert("Todo salió bien, ¡enviar formulario!")
    }else{
      this.form.markAllAsTouched();
      alert("Todo salió mal, ¡no enviar formulario!")
    }
  }

}