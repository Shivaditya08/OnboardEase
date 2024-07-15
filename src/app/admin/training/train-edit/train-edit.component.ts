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
      this._router.navigate(['/training']);
    });
  }
}


// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CandidateSerService } from '../../../shared/services/candidate-ser.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-candidate-edit',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './candidate-edit.component.html',
//   styleUrl: './candidate-edit.component.css',
// })
// export class CandidateEditComponent {
//   id: any;
//   canData: any;

//   constructor(
//     private _actRoute: ActivatedRoute,
//     private _dbServ: CandidateSerService,
//     private _router: Router
//   ) {}

//   ngOnInit() {
//     this._actRoute.paramMap.subscribe((para) => {
//       // console.log(para);
//       this.id = para.get('cId');
//       // console.log(id);
//       this._dbServ.getSingleDataRequest(this.id).subscribe((res) => {
//         // console.log(res);
//         // this.empData = new FormGroup({...res});
//         this.canData = { ...res };
//       });
//     });
//   }

//   addData(data: any) {
//     this._dbServ.updateUser(this.id, data).subscribe(() => {
//       window.alert('data updated successfully');
//       this._router.navigate(['/candidate']);
//     });
//   }
// }









