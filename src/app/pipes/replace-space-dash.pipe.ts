import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'replaceSpaceDash'})

export class ReplaceSpaceDash implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value  = value.replace(/\s+/g, '-').trim();
        }
        return value;
    }

}



