import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CandidateSerService } from '../../../shared/services/candidate-ser.service';

@Component({
  selector: 'app-candidate-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './candidate-add.component.html',
  styleUrl: './candidate-add.component.css',
})
export class CandidateAddComponent {
  canData: any;

  constructor(private _dbServ: CandidateSerService, private _router: Router) {}

  ngOnInit() {
    this.canData = new FormGroup({
      name:new FormControl(""),
      post:new FormControl(""),
      counsellor:new FormControl(""),
      salary:new FormControl(""),
      address:new FormControl("")
    });
  }
  addData() {
    console.log(this.canData.value);
    this._dbServ.addUser(this.canData.value).subscribe(() => {
      window.alert('User added successfully');
      this._router.navigate(['/candidate']);
    });
  }
}

