import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidateSerService {
  constructor(private _http: HttpClient) {}

  //make get request
  fetchData() {
    return this._http.get('http://localhost:8000/candidate');
  }

  //delete request
  deleteUser(id: any) {
    return this._http.delete(`http://localhost:8000/candidate/${id}`);
  }
  //post request
  addUser(data: any) {
    return this._http.post(`http://localhost:8000/candidate`, data);
  }

  //get request for single data
  getSingleDataRequest(id: any) {
    return this._http.get(`http://localhost:8000/candidate/${id}`);
  }

  //put request
  updateUser(id: any, data: any) {
    return this._http.put(`http://localhost:8000/candidate/${id}`, data);
  }
}
