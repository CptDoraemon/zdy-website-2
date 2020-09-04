import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { ContributeToDatabaseModule } from './contribute-to-database/contribute-to-database.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    ContributeToDatabaseModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
