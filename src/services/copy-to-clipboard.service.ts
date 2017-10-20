import {Injectable} from "@angular/core";

declare var $:any;

@Injectable()

export class CopyDataToClipboardService {

    // Copy to clipboard ( single copy per page )
    copyHTMLDataToClipboard( ) {
        var $tgt = $($('body .copy').attr('data-target'));
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        //console.log('HTML copied to clipboard!')
    }

    // Copy specific id to clipboard ( multiple copy per page )
    copyThisHTMLDataToClipboard( id ) {
        var $tgt = $(id);
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        //console.log('HTML copied to clipboard!')
    }

    // Copy CSS to clipboard ( single copy per page )
    copyCSSDataToClipboard( ) {
        var $tgt = $($('body .copycss').attr('data-target'));
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copycss');
        //console.log('CSS copied to clipboard!')
    }

    // Copy specific id to clipboard ( multiple copy per page )
    copyThisCSSDataToClipboard( id ) {
        var $tgt = $(id);
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($tgt.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        //console.log('HTML copied to clipboard!')
    }
}






