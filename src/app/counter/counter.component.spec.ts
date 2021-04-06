import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [],
      providers: [],
    }).compileComponents();
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 0 value for counter at beginning', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#counter-value').textContent).toMatch('0');
  });

  it('should increment counter', fakeAsync(() => {
    fixture.detectChanges();
    const incrementBtn = fixture.debugElement.nativeElement.querySelector(
      '#increment-btn'
    );
    incrementBtn.click();
    fixture.detectChanges();
    tick();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#counter-value').textContent).toMatch('1');
  }));

  it('should decrement counter', fakeAsync(() => {
    fixture.detectChanges();
    const decrementBtn = fixture.debugElement.nativeElement.querySelector(
      '#decrement-btn'
    );
    decrementBtn.click();
    fixture.detectChanges();
    tick();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#counter-value').textContent).toMatch('-1');
  }));

  it('should reset counter', fakeAsync(() => {
    fixture.detectChanges();
    component.counter = 1;
    const resetBtn = fixture.debugElement.nativeElement.querySelector(
      '#reset-btn'
    );
    resetBtn.click();
    fixture.detectChanges();
    tick();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#counter-value').textContent).toMatch('0');
  }));
});
