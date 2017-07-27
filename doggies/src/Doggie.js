import React from "react"
import { Card, Image } from "semantic-ui-react"

const Doggie = props => {
  const { doggie, img } = props

  return (
    <Card className="dog-card">
      <Image className="dog-card-image" src={img} />
      <Card.Content>
        <Card.Header>
          {doggie}
        </Card.Header>
        <Card.Meta>
          <span>Woof! Grr!</span>
        </Card.Meta>
        <Card.Description>
          <span>
            Hi! I am a {doggie}
          </span>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Doggie

// <Card.Content extra>
//   <a>
//     <Icon name='user' />
//     22 Friends
//   </a>
// </Card.Content>
