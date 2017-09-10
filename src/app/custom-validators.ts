import {
  Observable
} from 'rxjs/Rx';
import {
  FormControl
} from '@angular/forms';

export class CustomValidators {
  static validateProjectName(control: FormControl): {
    [s: string]: boolean;
  } {
    if (control.value !== null && ( < string > control.value).toUpperCase() === 'TEST') {
      return {
        invalidProjectName: true
      };
    }
    return null;
  }

  static asyncValidateProjectName(control: FormControl): Promise < any > | Observable < any > {
    const promise = new Promise < any > ((resolve, reject) => {
      setTimeout(() => {
        if (( < string > control.value).toUpperCase() === 'TEST PROJECT') {
          resolve({
            invalidProjectName: true
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
