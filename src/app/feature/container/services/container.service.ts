import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContainerService {
  constructor(private http: HttpClient) {}
  /**
   * Get latest details about backend
   * @returns observable with data
   */
  getInfo(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}`);
  }

  postInfo(body: any) {
    return this.http.post<any>(`${environment.baseUrl}`, body);
  }
}
