import { Component  } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''), // <-- Here's how you pass in the custom validator.]),
    lastName: new FormControl(''),
    birthday: new FormControl(new Date().toISOString().slice(0, -1)),
    address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
    })
  });

  onSubmit() {
    const user = new User(this.profileForm.value);
    console.warn(user);
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
