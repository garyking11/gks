"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CopyDataToClipboardService = (function () {
    function CopyDataToClipboardService() {
    }
    // Copy to clipboard ( single copy per page )
    CopyDataToClipboardService.prototype.copyHTMLDataToClipboard = function () {
        var $tgt = $($('body .copy').attr('data-target'));
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        //console.log('HTML copied to clipboard!')
    };
    // Copy specific id to clipboard ( multiple copy per page )
    CopyDataToClipboardService.prototype.copyThisHTMLDataToClipboard = function (id) {
        var $tgt = $(id);
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        //console.log('HTML copied to clipboard!')
    };
    // Copy CSS to clipboard ( single copy per page )
    CopyDataToClipboardService.prototype.copyCSSDataToClipboard = function () {
        var $tgt = $($('body .copycss').attr('data-target'));
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copycss');
        //console.log('CSS copied to clipboard!')
    };
    CopyDataToClipboardService = __decorate([
        core_1.Injectable()
    ], CopyDataToClipboardService);
    return CopyDataToClipboardService;
}());
exports.CopyDataToClipboardService = CopyDataToClipboardService;
//# sourceMappingURL=copy-to-clipboard.service.js.map