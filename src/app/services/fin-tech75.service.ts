import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinTech75Service {
  constructor(
    private http: HttpClient
  ) { }

  public getPositions(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/ba1d33b6-3d8a-4355-4a71-08db39d60f55");
  }
}
