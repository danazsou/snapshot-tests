import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "25rem"}}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/106777410?s=96&v=4" />
        <Card.Body>
            <Card.Title>Dana</Card.Title>
            <Card.Text>
            Hi - my name is Dana. I am currently studying software development. 
            it has but extremely challenging but also fun.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard