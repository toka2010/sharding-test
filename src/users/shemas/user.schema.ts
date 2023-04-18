import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({})
export class User {
    @Prop({type:String})
    userName:string;
    

    @Prop({type:String})
    password:string;

}
export const UserSchema= SchemaFactory.createForClass(User);
export type UserDocument= User &  Document;