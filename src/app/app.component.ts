import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#2f2fa2';
  }
  title = 'quick-hire';
}
