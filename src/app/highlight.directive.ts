import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})

export class HighlightDirective {
    @Input() appHighlight: any;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        let value = this.appHighlight[1];
        if (value !== undefined) {
            const re = new RegExp(this.appHighlight[0], 'gi');
            value = value + '';
            this.el.nativeElement.innerHTML = value.replace(
                re,
                "<b style='background-color: yellow;'>$&</b>"
            );
        }

    }
}