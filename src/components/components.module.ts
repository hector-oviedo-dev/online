import { NgModule } from '@angular/core';
import { AutoInputComponent } from './auto-input/auto-input';
import { AutoFormComponent } from './auto-form/auto-form';
import { AutoGridComponent } from './auto-grid/auto-grid';
import { AutoMenuComponent } from './auto-menu/auto-menu';
import { AutoSelectComponent } from './auto-select/auto-select';
import { AutoChecklistComponent } from './auto-checklist/auto-checklist';
import { AutoTextareaComponent } from './auto-textarea/auto-textarea';
import { AutoDateComponent } from './auto-date/auto-date';
import { AutoCheckComponent } from './auto-check/auto-check';
import { AutoRadioComponent } from './auto-radio/auto-radio';
import { AutoDuoselectComponent } from './auto-duoselect/auto-duoselect';
@NgModule({
	declarations: [AutoInputComponent,
    AutoFormComponent,
    AutoGridComponent,
    AutoMenuComponent,
    AutoSelectComponent,
    AutoChecklistComponent,
    AutoTextareaComponent,
    AutoDateComponent,
    AutoCheckComponent,
    AutoRadioComponent,
    AutoDuoselectComponent,
    AutoGridComponent],
	imports: [],
	exports: [AutoInputComponent,
    AutoFormComponent,
    AutoGridComponent,
    AutoMenuComponent,
    AutoSelectComponent,
    AutoChecklistComponent,
    AutoTextareaComponent,
    AutoDateComponent,
    AutoCheckComponent,
    AutoRadioComponent,
    AutoDuoselectComponent,
    AutoGridComponent]
})
export class ComponentsModule {}
