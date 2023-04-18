import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shemas/user.schema';
import { UserService } from './user.service';
@Module({
imports:[

    MongooseModule.forFeatureAsync([{
        name:'users',
        useFactory:()=>{
            const schema=UserSchema;
            return schema;
        }
    
    }])
],
providers:[UserService],
controllers:[],
exports:[UserService]
})
export class UserModule{}