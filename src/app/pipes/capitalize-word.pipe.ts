import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'capitalizeWord'})

export class CapitalizeWordPipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value.toUpperCase();
        }
        return value;
    }

}