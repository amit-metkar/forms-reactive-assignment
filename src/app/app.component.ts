import {
  Observable
} from 'rxjs/Rx';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Statuses: string[] = ['Stable', 'Critical', 'Finished'];

  projectForm: FormGroup;

  ngOnInit(): void {

    this.projectForm = new FormGroup({
      'projectDetails': new FormGroup({
        // 'projectName': new FormControl(null, [Validators.required, this.validateProject]),
        'projectName': new FormControl(null, [Validators.required], [this.validateProjectName]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'status': new FormControl(null)
    });

    this.projectForm.patchValue({
      'status': 'Stable'
    });
  }

  validateProject(control: FormControl): {
    [s: string]: boolean
  } {
    if (control.value !== null &&  ( < string > control.value).toUpperCase() === 'TEST') {
      return {
        'invalidProjectName': true
      };
    }
    return null;
  }

  validateProjectName(control: FormControl): Promise < any > | Observable < any > {
    const promise = new Promise < any > ((resolve, reject) => {
      setTimeout(() => {
        if (( < string > control.value).toUpperCase() === 'TEST') {
          resolve({
            'invalidProjectName': true
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
