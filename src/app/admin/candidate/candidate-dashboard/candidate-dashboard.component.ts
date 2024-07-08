import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CandidateSerService } from '../../../shared/services/candidate-ser.service';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.css',
})
export class CandidateDashboardComponent {
  canData: any;

  constructor(private _dbServ: CandidateSerService) {
    //create instance of service class
  }

  ngOnInit() {
    // this.getData();
    this.getData();
  }

  getData() {
    this._dbServ.fetchData().subscribe((res) => {
      console.log(res);
      this.canData = res;
    });
  }

  deleteData(id: any) {
    if (window.confirm(`Are you sure you want to delete record with ${id}`))
      this._dbServ.deleteUser(id).subscribe(() => {
        window.alert('data deleted successfully');
        this.getData();
      });
  }
}
