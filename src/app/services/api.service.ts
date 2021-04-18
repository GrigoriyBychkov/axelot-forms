import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IForm} from '../../../Interfaces/IForm';
import {IFormData} from '../../../Interfaces/IFormData';

const serverUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  public getFormConfig(): Observable<IForm> {
    return this.http.get<IForm>(`${serverUrl}/getForm`);
  }

  public getFormData(): Observable<IFormData> {
    return this.http.get<IFormData>(`${serverUrl}/getData`);
  }
}
