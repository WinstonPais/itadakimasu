import React from 'react'
import { Comment } from 'semantic-ui-react';

const SingleComment = (props) => {
    return (
        <Comment>
          <Comment.Avatar src={props.commentData['profilePicture']} />
          <Comment.Content>
            <Comment.Author style={{color:'white'}} as='a'>{props.commentData['userName']}</Comment.Author>
            <Comment.Text style={{color:'white'}}>{props.commentData['comment']}</Comment.Text>
            {/* <Comment.Actions>
              <Comment.Action style={{color:'white'}}>Reply</Comment.Action>
            </Comment.Actions> */}
          </Comment.Content>
        </Comment>
    )
}

export default SingleComment
