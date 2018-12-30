import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

   function RenderComments({comments}) {
        if (!comments || comments.length === 0) {
            return (<div></div>);
        } else {
            var options = {year: 'numeric', month: 'short', day: 'numeric'};
            let list = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)} </p>
                    </li>
                )
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
    }

    const DishDetail = (props) => {
        const dish = props.dish;
        if (dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

};

export default DishDetail;
