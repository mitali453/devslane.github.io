
import { Entity } from "./Entity";
import { User } from "./User";

export interface Group extends Entity{
    name:                 string;
    is_private:           boolean;
    description:          string;
    introductory_message?: string;
    group_image_url:      string;
    join_code:            string;
    created_at:           Date;
    updated_at:           Date;
    chatCount:            number;
    creator:              User;
    issues:               any[];
    invitedMembers:       User[];
    participants:         User[];
    advocatePage?:        string;
    query:string
}
