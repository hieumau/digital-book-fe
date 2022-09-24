import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Author} from "../model/author.model";
import {Book} from "../model/book.model";
import {Reader} from "../model/reader.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `${environment.apiUrl}/readers`;

  constructor(private apiService: ApiService) {
  }

  save(reader: Reader) : Observable<Reader>{
    return this.apiService.post<Reader>(this.baseUrl + `/signup`, reader)
  }
}
