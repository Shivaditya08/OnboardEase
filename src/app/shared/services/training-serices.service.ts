import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TrainingSericesService {

  constructor(private _http: HttpClient) {}

  //make get request
  fetchData() {
    return this._http.get('http://localhost:8000/training');
  }

  //delete request
  deleteUser(id: any) {
    return this._http.delete(`http://localhost:8000/training/${id}`);
  }
  //post request
  addUser(data: any) {
    return this._http.post(`http://localhost:8000/training`, data);
  }

  //get request for single data
  getSingleDataRequest(id: any) {
    return this._http.get(`http://localhost:8000/training/${id}`);
  }

  //put request
  updateUser(id: any, data: any) {
    return this._http.put(`http://localhost:8000/training/${id}`, data);
  }
}
