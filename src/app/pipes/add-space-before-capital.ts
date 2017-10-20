import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'addSpaceBeforeCapital'})

export class AddSpaceBeforeCapitalPipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value  = value.replace(/([A-Z])/g, ' $1').trim();
        }
        return value;
    }

}



