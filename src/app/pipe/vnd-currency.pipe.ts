import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndCurrency'
})
export class VndCurrencyPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Convert to a number if it's a string
    const numberValue = typeof value === 'string' ? parseFloat(value) : value;

    // Format the number with commas and add the currency symbol
    return numberValue.toLocaleString('vi-VN') + ' đ';
  }

}
