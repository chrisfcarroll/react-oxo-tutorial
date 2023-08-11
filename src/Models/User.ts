interface User{
    firstName:string;
    lastName:string;
    imageUrl: string | undefined;
    avatarSize: Dimensions;
}

export interface Dimensions{ width:number, height:number}

export function fullName(user:User):string{ return `${user.firstName} ${user.lastName}`}

export default User