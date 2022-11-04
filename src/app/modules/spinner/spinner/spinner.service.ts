import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    public _spin: BehaviorSubject<Array<string>> = new BehaviorSubject(new Array());
    constructor() { }

    show(id: string) {
        this._spin.next(this._spin.value.concat(id));
    }

    hide(id: string) {
        const index = this._spin.value.findIndex(item => item === id)
        index !== -1 && this._spin.value.splice(index, 1)
        this._spin.next(this._spin.value);
    }

}
