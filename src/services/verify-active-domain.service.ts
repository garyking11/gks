import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class VerifyActiveDomainService {

  constructor(private _http:Http  ) {}

  verifyDomainIsActive(domainname):Observable<any> {
    console.log(domainname);
    const body = JSON.stringify(domainname);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/domain/verify-active-domain.endpoint.php', body, {headers: headers}).map(res => res.json() );
  }
}