import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'multi'
})

export class Multi implements PipeTransform {
    transform(value: any, times?: any): any {
        let res = "";

        for (let i = 0; i < times; i++) {
            res += value;
        }

        return res;
    }

}