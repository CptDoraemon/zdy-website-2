import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { ContributeToDatabaseModule } from './contribute-to-database/contribute-to-database.module';
import { TableDataModule } from './table-data/table-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    ContributeToDatabaseModule,
    TableDataModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
