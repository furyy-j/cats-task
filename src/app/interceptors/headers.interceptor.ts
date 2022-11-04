import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {SpinnerService} from "../modules/spinner/spinner/spinner.service";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const apiKey = 'live_OpUhQl6e0sMvT3KHn8W4tJXxxinVF3LkYeFDxX2FtCSiP5W3fvIvUyQyE9WoGJV0';
        request = request.clone({
            setHeaders: {
                'x-api-key': apiKey
            }
        })
        return next.handle(request);
    }
}

