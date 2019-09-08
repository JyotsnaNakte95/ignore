import { Injectable } from '@angular/core';
import{Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import './rxjs-operators';
//import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) {
        }
        getShoppingItems(){
        return this.http.get('http://localhost:3000/api/items')
      .map(res => res.json());
        //.pipe(map(res => res.json()));
        }
        addShoppingItem(newItem){
          let headers = new Headers();
          headers.append('Content-Type','application.json');
          return this.http.post('http://localhost:3000/api/item', newItem,{headers: headers})
            //.pipe(map(res => res.json()));
            .map(res => res.json());
        }
}
