import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'curlyQuotes'})

export class CurlyQuotesPipe implements PipeTransform {
    transform(value: string, args?: any[]) {
        return '\u201C' + value.trim() + '\u201D';
    }
}