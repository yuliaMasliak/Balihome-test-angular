import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasIssues'
})
export class HasIssuesPipe implements PipeTransform {
  transform(value: boolean): unknown {
    if (value) {
      return 'done';
    } else {
      return 'clear';
    }
  }
}
