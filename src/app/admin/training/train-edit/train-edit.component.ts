import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { TrainingSericesService } from '../../../shared/services/training-serices.service';


@Component({
  selector: 'app-train-edit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './train-edit.component.html',
  styleUrl: './train-edit.component.css'
})
export class TrainEditComponent {

  
  id: any;
  trainData: any;

  constructor(
    private _actRoute: ActivatedRoute,
    private _dbServ: TrainingSericesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._actRoute.paramMap.subscribe((para) => {
      // console.log(para);
      this.id = para.get('id');
      // console.log(id);
      this._dbServ.getSingleDataRequest(this.id).subscribe((res) => {
        // console.log(res);
        // this.empData = new FormGroup({...res});
        this.trainData = { ...res };
      });
    });
  }

  addData(data: any) {
    this._dbServ.updateUser(this.id, data).subscribe(() => {
      window.alert('data updated successfully');
      this._router.navigate(['/candidate']);
    });
  }
}






