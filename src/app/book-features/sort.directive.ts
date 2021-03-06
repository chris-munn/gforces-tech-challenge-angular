import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { get } from 'lodash';

@Directive({
  selector: '[sortColumn]',
})

export class SortDirective implements OnInit {
  @Input() data: any[];
  @Input('sortKey') key: any;
  private toggleSort: boolean = false;

  constructor (private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit () {
    this.renderer.addClass(this.el.nativeElement, 'btn');
    // this.renderer.addClass(this.el.nativeElement, 'btn-primary');
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      const parentNode = this.el.nativeElement.parentNode;
      const children   = parentNode.children;
      if (this.data && this.key) {
        const sortedData: any = this.sortArray();
      }
      this.toggleSort = !this.toggleSort;
    });
  }

  sortArray (): any[] {
    const tempArray: any[] = this.data;
    tempArray.sort((a, b) => {
      const str1: string = get(a, this.key, '').toLowerCase();
      const str2: string = get(b, this.key, '').toLowerCase();
      if (this.toggleSort) {
        if (str1 < str2) {
          return -1;
        }
        if (str1 > str2) {
          return 1;
        }
      } else {
        if (str1 > str2) {
          return -1;
        }
        if (str1 < str2) {
          return 1;
        }
      }
      return 0;
    });
    return tempArray;
  }
}
