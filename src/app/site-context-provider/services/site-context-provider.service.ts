import {Injectable, OnInit} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable, Observer, Subscriber} from "rxjs/Rx";
declare var $:any;

@Injectable()
export class SiteContextProviderService implements OnInit {

    private _localDirectories:string[];
    private _currentContext:any;
    private _currentContextSubscribers:Subscriber<any>[] = [];
    constructor(
        private _http:Http,
         ) {}

    /**
     * Get local directories
     * @returns {any}
     */
    getLocalDirectories():Observable<string[]> {
        return Observable.create((subscriber:Subscriber<string[]>) => {

            if (this._localDirectories) {
                subscriber.next(this._localDirectories);
                subscriber.complete();
                return;
            }

            // path is correct here
            this._http.get('/dashboard/endpoints/get-local-directories-endpoint.php')
                .map((response : Response) => response.json())
                .subscribe(
                    data => {
                        this._localDirectories = data;
                       // console.log('getLocalDirectories');
                        subscriber.next(data);
                        subscriber.complete();
                    },
                    error => {
                        'Error at getLocalDirectories';
                        subscriber.error(error);
                    }
                );
        });
    }

    ngOnInit(){
        this.getCurrentContext();
    }

    /**
     * getCurrentContext()
     * @returns {any}
     */
    getCurrentContext():Observable<any> {

        return Observable.create((subscriber:Subscriber<any>) => {
            this._currentContextSubscribers.push(subscriber);

            if (this._currentContext) {
                subscriber.next(this._currentContext);
                return;
            }

            // Get from data site-context.json
            this._http.get('/dashboard/data/site-context.json')
                .map((response:Response) => response.json())
                .subscribe(
                    data => {
                        this._currentContext = data;
                        subscriber.next(data);
                        //console.log(this._currentContext.product_type);
                    },
                    error => {
                        'Error at getCurrentContext()';
                        subscriber.error(error);
                    }
                );
        });
    }

    /**
     * Get siteData from local site
     * @param account
     * @returns {Observable<R>}
     */
    getProductType(account):Observable<any> {
        return this._http.get('../../' + account + '/assets/includes/data/data.json')
            .map(response => response.json());
    }

    /**
     * Click event triggers onSetSiteData(form values) which calls setCurrentContent()
     * @param context
     */
    setCurrentContext(context:any) {
        var siteContext:any = {
                'account': context.value.account,
                'sm_version': context.value.sm_version,
                'data_version': context.value.data_version
            };

        var body:string = JSON.stringify(siteContext);

        const headers:Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // Post to active account
        this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, {headers: headers}).subscribe(
            data => {
                this._currentContext = siteContext;
                console.log(this._currentContext);

                this._currentContextSubscribers.forEach((subscriber:Subscriber<any>) => {
                    subscriber.next(this._currentContext);
                });
            },
            error => {
                'Error at setCurrentContext()';
            }
        );
    }

    /**
     * Get domain name from address bar
     */
    getCurrentDomainName(){
        var domainName = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
        return domainName;
    }

}
