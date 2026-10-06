import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { UserModule } from './users/users.module.js';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggingInterCeptor } from './common/interceptor/logging.interceptor.js';

@Module({
  imports: [
    AuthModule,
    UserModule,

    ConfigModule.forRoot(
      {
        isGlobal: true // makes it available everywhere without re-importing
      }),
  ],
  controllers: [AppController],
  providers: [AppService, 
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterCeptor,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class AppModule {}
