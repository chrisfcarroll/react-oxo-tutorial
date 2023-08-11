import User, {fullName} from "../Models/User";
import {Card,Icon,Image,Header} from "semantic-ui-react";

export default function AboutUser(user:User){
 return (
     <div style={{display:'flex', justifyContent:'center'}}>
         <Card className={"about-page"}>
         <Image src={user.imageUrl} alt={`Photo of ${fullName(user)}`} />
         <Card.Content>
             <Card.Header>About {user.firstName} {user.lastName}</Card.Header>
             <Card.Description>This is a  section about {fullName(user)}</Card.Description>
         </Card.Content>
         <Card.Content extra>
             <Icon name='user'/>
         </Card.Content>
         </Card>
     </div>)
}

