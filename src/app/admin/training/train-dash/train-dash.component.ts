import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrainingSericesService } from '../../../shared/services/training-serices.service';


@Component({
  selector: 'app-train-dash',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './train-dash.component.html',
  styleUrl: './train-dash.component.css'
})
export class TrainDashComponent {

  trainData: any;

  constructor(private _dbServ: TrainingSericesService) {
    //create instance of service class
  }

  ngOnInit() {
    // this.getData();
    this.getData();
  }

  getData() {
    this._dbServ.fetchData().subscribe((res) => {
      console.log(res);
      this.trainData = res;
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




