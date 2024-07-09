import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { TrainingSericesService } from '../../../shared/services/training-serices.service';

@Component({
  selector: 'app-train-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './train-add.component.html',
  styleUrl: './train-add.component.css'
})
export class TrainAddComponent {

  
  trainData: any;

  constructor(private _dbServ: TrainingSericesService, private _router: Router) {}

  ngOnInit() {
    this.trainData = new FormGroup({
      uid: new FormGroup(''),
      upass: new FormGroup(''),
      role: new FormGroup(''),
    });
  }
  addData() {
    console.log(this.trainData.value);
    this._dbServ.addUser(this.trainData.value).subscribe(() => {
      window.alert('User added successfully');
      this._router.navigate(['/crud2']);
    });
  }



}



