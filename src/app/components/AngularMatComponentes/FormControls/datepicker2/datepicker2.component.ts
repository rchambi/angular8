import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
})
export class Datepicker2Component {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
