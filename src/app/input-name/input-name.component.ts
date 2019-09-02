import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.sass']
})

export class InputNameComponent implements
OnInit,
DoCheck,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  @Output() nameChanged = new EventEmitter<string> ();
  @Input() userName: string;
  private color: string = 'green';

  constructor() {
  }

  onUserInput(value: string) {
    this.nameChanged.emit(value);
  }

   ngAfterContentChecked(): void {
    console.log(`%cAfterContentChecked`, `color: ${this.color}`);
  }

  ngAfterContentInit(): void {
    console.log(`%cAfterContentInit`, `color: ${this.color}`);
  }

  ngAfterViewChecked(): void {
    console.log(`%cAfterViewChecked`, `color: ${this.color}`);
  }

  ngAfterViewInit(): void {
    console.log(`%cAfterViewInit`, `color: ${this.color}`);
  }

  ngDoCheck(): void {
    console.log(`%cDoCheck`, `color: ${this.color}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%cOnChanges`, `color: ${this.color}`);
  }

  ngOnDestroy(): void {
    console.log(`%cOnDestroy`, `color: ${this.color}`);
  }

  ngOnInit(): void {
    console.log(`%cOnInit`, `color: ${this.color}`);
  }
}
