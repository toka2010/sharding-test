import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './shemas/user.schema';

@Injectable()
export class UserService   implements OnModuleInit{
  constructor(@InjectModel('users') private _userModel: Model<User>) {}
     async onModuleInit() {
      await this._userModel.create({userName:"ttt@gmail.com" , password:"123456789"})
      const users= await this._userModel.find({});
      console.log("🚀 ~ file: user.service.ts:12 ~ UserService ~ onModuleInit ~ users:", users)
    }
} 
