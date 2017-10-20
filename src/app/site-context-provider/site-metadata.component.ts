import {Component, OnInit, EventEmitter, DoCheck} from "@angular/core";
import { SiteContextProviderService } from "../site-context-provider";
import {FormGroup, FormControl, Validators, NgForm} from "@angular/forms";

@Component({
    selector: 'site-metadata',
    templateUrl: 'templates/site-metadata.template.html',
    styles: [
        '.dashboard-heading { font-size: 1.5em;}',
        '.site-current-metadata{font-size: 1.25em;}',
        '.site-current-metadata li {margin-right: 2px; margin-left: 2px;}'
    ],
    inputs: ['currentAccount', 'parentValue'],
    outputs: ['accountChanged']
})

export class SiteMetaDataComponent  implements OnInit{

    parentValue: string;
    currentAccount: string;
    accountChanged =  new EventEmitter<string>();
    localDirectories: any[] = [];
    account: string;
    product_type: string;
    localSiteItems: any[] = [];
    response: string;
    selectSiteMetadataForm: FormGroup;
    metadata: any;

    // Product types
    productTypes = [ "SDS", "PSDS", "Landing Page" ];

    /**
     *
     * @param _siteContextProviderService
     */
    constructor(
        public _siteContextProviderService:SiteContextProviderService,
    ) {
      // The Form
        this.selectSiteMetadataForm =  new FormGroup({
            'account': new FormControl('' , Validators.required),
            'sm_version': new FormControl('1.0.0'),
            'data_version': new FormControl('1.0.0')
        })

        //log site-context changes to console
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
                this.initCurrentProduct();
            },
            error => {'Current Site Data Unavailable'}
        );

        this.selectSiteMetadataForm.valueChanges.subscribe(
            (data: any) => console.log(data)
        );
    }

    /**
     * Acquire available accounts (directories) and initialize current data form /data/site-context.json onInit
     */
    ngOnInit() {
        this.onGetLocalDirectories();
        this.initCurrentSite();
    }

    /**
     * Acquire list of local accounts (directories) using service
     */
    onGetLocalDirectories(){
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(
                data => {
                    this.localDirectories = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Initialize current site/account name from /data/site-context.json
     */
    private initCurrentSite() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
                this.initCurrentProduct();
            },
            error => {'Current Site Data Unavailable'}
        );
    }


    /**
     * Initialize current product type from /data/site-context.json
     */
   initCurrentProduct() {
        this._siteContextProviderService.getProductType(this.account).subscribe(
            data => {
                this.product_type = data.product_type;
                //console.log('product: ' + this.product_type);
            },
            error => {'Current Product Data Unavailable'}
        );
    }

    /**
     * Write current selected account to /data/site-context.json when click event is triggered from site-metadata.template
     */
    onSetSiteData(){
        var metadata = this.selectSiteMetadataForm; // Form values
        this._siteContextProviderService.setCurrentContext(metadata);
        //this._compiledTemplateDone.clear();
        location.reload();

    }
}

