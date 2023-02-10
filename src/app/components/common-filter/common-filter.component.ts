import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-common-filter',
  templateUrl: './common-filter.component.html',
  styleUrls: ['./common-filter.component.scss']
})
export class CommonFilterComponent implements OnInit {
  showDropDown = [5, 10, 15, 20];
  @Input() searchTitle = '';
  @Input() formField: any;
  @Output() applyButton: EventEmitter<any> = new EventEmitter();
  @Output() resetButton: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  reset() {
    console.log('rst in fltr');

    this.resetButton.emit();
  }
  onSubmit() {
    this.applyButton.emit(this.formField);
    console.log(this.formField.value, "value");
  }

}

