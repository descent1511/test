import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable, tap } from 'rxjs';
  
  @Injectable()
  export class TimingInterceptor implements NestInterceptor {
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
      const start = Date.now();
  
      return next.handle().pipe(
        tap(() => {
          const response = context.switchToHttp().getResponse();
          const loadTime = Date.now() - start;
          response.locals.time = loadTime;
        }),
      );
    }
  }