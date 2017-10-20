import {Injectable, Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({
    name: 'uniqueItemPipe'
})
@Injectable()
export class UniqueItemPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item[0].indexOf(args[0]) !== -1);
    }
}