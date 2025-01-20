import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiURL = 'https://sitecredisystemaws.datascoring.co:9980/api/form/process-data';
  private token = 'Bearer KtsyO0jalU8_YkAiXACbwnh84ZHBGS_C1DTFhXH8LeZyRuQKPnfwKKsZe6d3LiaJrNPRN_6Eboz4fc7IPPYENvS6GOnZg3yyA9vlcx7Bwy4LttZImtNEOv8IBGlLh2GSt6Xszdmxl_NNCmgLYmXxUdrqjgHytBGzJuWJu8SOctSVj_wp5FtzpaR7u4rCFIAYP5jmrlf4F28sSgLEjZzuKklpazQqpTN4cxz8CT3Z590KOqfUyPCGiy1-Xg0n-Efg1JrHQXbKZZkaKcI1UHWK4KMaVEJHsCFl9W5OfR_atmIZoTpcycvbCA6hhyh7P-0a-C7XED2BYfyxhw8sOXF5vA'
  constructor(
    private http: HttpClient
  ) { }

  getUserData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })

    const body = {
      ProjectId: '6010',
      ApplicationId: '6020',
      ButtonId: '854505',
      Table: 1,
      Controls: [
        { Id: 'Tipo', Valor: 'CC' },
        { Id: 'Documento', Valor: '1026567399' },
      ],
    };

    return this.http.post(this.apiURL, body, { headers });
  }
}