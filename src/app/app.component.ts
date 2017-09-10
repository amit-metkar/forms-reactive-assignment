import { CustomValidators } from './custom-validators';
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
        'projectName': new FormControl(null,
          [Validators.required, CustomValidators.validateProjectName],
          [CustomValidators.asyncValidateProjectName]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'status': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
