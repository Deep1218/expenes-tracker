import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule,
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditComponent {
  transactionForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.transactionForm = this.fb.group({
      category: ['', [Validators.required]],
      amount: [1, [Validators.required, Validators.min(1)]],
      date: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });
    // this.transactionForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   age: ['', [Validators.required, Validators.min(18)]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });
  }
  onSubmit() {
    console.log(this.transactionForm.value);
  }
}
