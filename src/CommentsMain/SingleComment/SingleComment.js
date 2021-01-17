import React from 'react'
import { Comment } from 'semantic-ui-react';

const SingleComment = () => {
    return (
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author style={{color:'white'}} as='a'>Matt</Comment.Author>
            <Comment.Text style={{color:'white'}}>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action style={{color:'white'}}>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    )
}

export default SingleComment
