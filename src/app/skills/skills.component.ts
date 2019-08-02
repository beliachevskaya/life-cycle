import {
  Component,
  Input,
  Output,
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
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements
OnInit,
DoCheck,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  @Input() count;
  @Input() skill;
  @Input() skillColor;
  @Input() skillName;
  @Output() isClicked = new EventEmitter<boolean>();
  constructor() {}

  increase(): void {
    this.count++;
    this.isClicked.emit(true);
  }
  decrease(): void {
    this.count--;
    this.isClicked.emit(false);
  }
  ngAfterContentChecked(): void {
    console.log(`%cAfterContentChecked`, `color: ${this.skillColor}`);
  }

  ngAfterContentInit(): void {
    console.log(`%cAfterContentInit`, `color: ${this.skillColor}`);
  }

  ngAfterViewChecked(): void {
    console.log(`%cAfterViewChecked`, `color: ${this.skillColor}`);
  }

  ngAfterViewInit(): void {
    console.log(`%cAfterViewInit`, `color: ${this.skillColor}`);
  }

  ngDoCheck(): void {
    console.log(`%cDoCheck`, `color: ${this.skillColor}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%cOnChanges`, `color: ${this.skillColor}`);
  }

  ngOnDestroy(): void {
    console.log(`%cOnDestroy`, `color: ${this.skillColor}`);
  }

  ngOnInit(): void {
    console.log(`%cOnInit`, `color: ${this.skillColor}`);
  }
}
