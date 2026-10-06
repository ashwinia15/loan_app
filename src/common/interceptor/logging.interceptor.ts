import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LoggingInterCeptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log("Request intercepted");
        const { method, url } = context.switchToHttp().getRequest();
        console.log(`Incoming request: ${method} ${url}`);
        const now = Date.now();
        return next.handle().pipe(
        tap(() => console.log(`Request completed in ${Date.now() - now}ms`)),
      );
    }
} 