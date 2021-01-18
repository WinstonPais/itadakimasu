import React, {useContext} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import SingleComment from './SingleComment/SingleComment';
import { UserContext } from '../contexts/UserProvider';
import firebase from 'firebase/app';
import 'firebase/database';

const CommentsMain = (props) => {
    const user = useContext(UserContext);
    let [comments,setComments] = React.useState(null); 
    let [currentComment,setCurrentComment] = React.useState(''); 

    React.useEffect(() => {
      if(props.commentdata){
        let temp = () => {
          return (
            Object.keys(props.commentdata).map((keyName,keyIndex) =>{
              return(
                <div style={{marginTop:'2em'}}>
                  <SingleComment commentData={props.commentdata[keyName]} />
                </div>
              )
            })
          )
        }
        setComments(temp);
      }
      
      
    },[props.commentdata])

    const addComment = async () =>{
      await firebase.database().ref('recipes/' + props.rId + '/comments/'+ user.uid+Date()).set({
        comment: currentComment,
        profilePicture: user.photoURL,
        userName: user.displayName
      });
      document.getElementById('textareacomment').value = '';
    }

    const updateStateComment = (event) =>{
      // console.log()
      setCurrentComment(event.target.value)
    }


    return (
        <Comment.Group>
        <Header style={{borderBottom:'1px solid white',color:'white'}} as='h3' dividing>
          Comments
        </Header>

        {comments}

        <div style={{marginTop:'2em'}}>
          <Form reply>
            <Form.TextArea onChange={updateStateComment} id="textareacomment" />
            <Button onClick={addComment} content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </div>
      </Comment.Group>
    )
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default CommentsMain

