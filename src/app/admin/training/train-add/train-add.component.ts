import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
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
      cName:new FormControl(""),
      cCate:new FormControl(""),
   cIns:new FormControl(""),
   cDur:new FormControl(""),
   cPlat:new FormControl(""),
   cStat:new FormControl("")
    });
  }
  addData() {
    console.log(this.trainData.value);
    this._dbServ.addUser(this.trainData.value).subscribe(() => {
      window.alert('User added successfully');
      this._router.navigate(['/training']);
    });
  }

}


// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
// import { Component } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import { CandidateSerService } from '../../../shared/services/candidate-ser.service';

// @Component({
//   selector: 'app-candidate-add',
//   standalone: true,
//   imports: [ReactiveFormsModule, RouterLink],
//   templateUrl: './candidate-add.component.html',
//   styleUrl: './candidate-add.component.css',
// })
// export class CandidateAddComponent {
//   canData: any;

//   constructor(private _dbServ: CandidateSerService, private _router: Router) {}

//   ngOnInit() {
//     this.canData = new FormGroup({
//       cName:new FormControl(""),
//       cCate:new FormControl(""),
//       cIns:new FormControl(""),
//       cDur:new FormControl(""),
//       cPlat:new FormControl(""),
//       cStat:new FormControl("")
//     });
//   }
//   addData() {
//     console.log(this.canData.value);
//     this._dbServ.addUser(this.canData.value).subscribe(() => {
//       window.alert('User added successfully');
//       this._router.navigate(['/candidate']);
//     });
//   }
// }




