import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //   curl --location 'https://sitecredisystemaws.datascoring.co:9980/api/form/process-data' \
  // --header 'Content-Type: application/json' \
  // --header 'Authorization: Bearer KtsyO0jalU8_YkAiXACbwnh84ZHBGS_C1DTFhXH8LeZyRuQKPnfwKKsZe6d3LiaJrNPRN_6Eboz4fc7IPPYENvS6GOnZg3yyA9vlcx7Bwy4LttZImtNEOv8IBGlLh2GSt6Xszdmxl_NNCmgLYmXxUdrqjgHytBGzJuWJu8SOctSVj_wp5FtzpaR7u4rCFIAYP5jmrlf4F28sSgLEjZzuKklpazQqpTN4cxz8CT3Z590KOqfUyPCGiy1-Xg0n-Efg1JrHQXbKZZkaKcI1UHWK4KMaVEJHsCFl9W5OfR_atmIZoTpcycvbCA6hhyh7P-0a-C7XED2BYfyxhw8sOXF5vA' \
  // --data '{
  //   "ProjectId": "6010",
  //   "ApplicationId": "6020",
  //   "ButtonId": "854505",
  //    "Table": 1,
  //    "Controls": [
  //        {
  //            "Id": "Tipo",
  //            "Valor": "CC"
  //        },
  //        {
  //            "Id": "Documento",
  //            "Valor": "1026567399"
  //        }
  //    ]
  // }'

  private apiURL = 'https://sitecredisystemaws.datascoring.co:9980/api/form/process-data';
  private token = 'KtsyO0jalU8_YkAiXACbwnh84ZHBGS_C1DTFhXH8LeZyRuQKPnfwKKsZe6d3LiaJrNPRN_6Eboz4fc7IPPYENvS6GOnZg3yyA9vlcx7Bwy4LttZImtNEOv8IBGlLh2GSt6Xszdmxl_NNCmgLYmXxUdrqjgHytBGzJuWJu8SOctSVj_wp5FtzpaR7u4rCFIAYP5jmrlf4F28sSgLEjZzuKklpazQqpTN4cxz8CT3Z590KOqfUyPCGiy1-Xg0n-Efg1JrHQXbKZZkaKcI1UHWK4KMaVEJHsCFl9W5OfR_atmIZoTpcycvbCA6hhyh7P-0a-C7XED2BYfyxhw8sOXF5vA'
  constructor(
    private http: HttpClient
  ) { }

  processFormData(data: any): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    };

    const payload = JSON.stringify(data);

    return fetch(this.apiURL, {
      method: 'POST',
      headers: headers,
      body: payload
    }).then(response => {
      return response.json();
    }).catch(error => {
      console.log('Error al enviar los datos:', error);
      return null;
    });
  }
}