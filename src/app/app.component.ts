import { Component } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Jsondata} from './jsondata';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jsondata: Jsondata[];
  finished: boolean;
  aio: Jsondata[];
  constructor(private http: HttpClient) { this.finished = true;
    this.getConfigResponse().subscribe(resp => {
      this.aio =  resp.body;
      console.log(this.jsondata);
      console.log(typeof this.jsondata);
      this.jsondata = [];
      this.onScroll();
      });
   // getJson();
  }
  getConfigResponse(): Observable<HttpResponse<Jsondata[]>> {
    return this.http.get<Jsondata[]>(
      'http://www.json-generator.com/api/json/get/bUNUMNIZsO?indent=2', { observe: 'response' });
  }
  onScroll () {
    console.log('scrolled!!');
    let temp = this.aio.slice(0, 100);
    this.jsondata.push.apply(this.jsondata, temp);
  }
  // getJson() {
  //   setInterval(() => {
  //     console.log(this.jsondata[12]); }, 4000);
  // }
}
