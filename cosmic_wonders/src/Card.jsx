import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const LoneWonder=(props)=>{
    return(
      <div key={props.info.id} className="container" style={{margin:"15px"}}>
        <Card body inverse style={{ backgroundColor: '#333'}} >
          <CardImg style={{width:"200",height:"150px"}} top width="100%" src={props.info.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.info.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{props.info.description}</CardText>
            <Button color="info">Button</Button>
        </CardBody>
      </Card>
      </div>
    )
  }

export default LoneWonder;
