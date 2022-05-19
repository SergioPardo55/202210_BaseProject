import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaService } from './banda.service';
import { FormsModule } from '@angular/forms';
import { BandaListComponent } from './banda-list/banda-list.component';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [BandaListComponent,BandaDetailComponent],
  exports: [BandaListComponent],
  providers: [BandaService]
})
export class BandasModule { }
