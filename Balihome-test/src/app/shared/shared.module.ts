import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasIssuesPipe } from './has-issues.pipe';

@NgModule({
  declarations: [HasIssuesPipe],
  imports: [CommonModule],
  exports: [HasIssuesPipe]
})
export class SharedModule {}
