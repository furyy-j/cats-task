import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  length: number = 0;
  constructor(
      public spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService._spin.subscribe(data => {
      this.length = data.length;
    })
  }

}
