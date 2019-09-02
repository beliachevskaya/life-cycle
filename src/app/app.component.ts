import {
  Component,
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements
OnInit,
DoCheck,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  userName: string;
  skills: string[] = ['Skill #1', 'Skill #2', 'Skill #3'];
  skillsColors: string[] = ['blue', 'blueviolet', 'deepskyblue'];
  clicks: number[] = [0, 0, 0];
  result: number = 0;
  private color: string = 'red';

  onNameChanged(value) {
    this.userName = value;
  }
  onChanged(event, index) {
    if (event) {
      this.clicks[index]++;
    } else {
      this.clicks[index]--;
    };
    this.result = this.clicks[0] + this.clicks[1] + this.clicks[2]; //это количество кликов на каждом поле skill
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
