"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SiteMetaDataComponent = (function () {
    function SiteMetaDataComponent(_siteContextProviderService) {
        this._siteContextProviderService = _siteContextProviderService;
        this.localDirectories = [];
        this.localSiteItems = [];
        this.productTypes = ["SDS", "PSDS", "Landing Page"];
        // The Form
        this.selectSiteMetadataForm = new forms_1.FormGroup({
            'account': new forms_1.FormControl('', forms_1.Validators.required),
            'product_type': new forms_1.FormControl('', forms_1.Validators.required),
            'sm_version': new forms_1.FormControl('1.0.0'),
            'data_version': new forms_1.FormControl('1.0.0')
        });
    }
    SiteMetaDataComponent.prototype.ngOnInit = function () {
        this.onGetLocalDirectories();
        this.initCurrentSite();
    };
    SiteMetaDataComponent.prototype.onGetLocalDirectories = function () {
        var _this = this;
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(function (data) {
            _this.localDirectories = data;
        }, function (error) { return console.log(error); });
    };
    SiteMetaDataComponent.prototype.initCurrentSite = function () {
        var _this = this;
        this._siteContextProviderService.getCurrentContext().subscribe(function (data) {
            _this.account = data.account;
            _this.product_type = data.product_type;
        }, function (error) {
            'Current Site Data Unavailable';
        });
    };
    // from site-metadata.template
    SiteMetaDataComponent.prototype.onSetSiteData = function () {
        var metadata = this.selectSiteMetadataForm; // Form values
        this._siteContextProviderService.setCurrentContext(metadata);
    };
    SiteMetaDataComponent = __decorate([
        core_1.Component({
            selector: 'site-metadata',
            templateUrl: 'templates/site-metadata.template.html',
            styles: [
                '.dashboard-heading { font-size: 1.5em;}',
                '.site-current-metadata{font-size: 1.25em;}',
                '.site-current-metadata li {margin-right: 2px; margin-left: 2px;}'
            ]
        })
    ], SiteMetaDataComponent);
    return SiteMetaDataComponent;
}());
exports.SiteMetaDataComponent = SiteMetaDataComponent;
//# sourceMappingURL=site-metadata.component.js.map