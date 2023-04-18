import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb://router-01:27017,router-02:27017',
          // "useUnifiedTopology": true,
          // "useNewUrlParser": true 
      }),
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
