import React from 'react';
import {UserContext} from '../../UserContext';
import PhotoCommetsForm from './PhotoCommentsform';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments)
    const commentsSection = React.useRef(null);
    const {login} = React.useContext(UserContext);

    React.useEffect(() =>{
        commentsSection.current.scroolTop = commentsSection.current.scrollHeight;
    },[])

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
                {comments.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>)}
            </ul>
            {login && <PhotoCommetsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments
