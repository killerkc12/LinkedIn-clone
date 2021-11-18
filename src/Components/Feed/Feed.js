import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from '../InputOptions/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { useEffect } from 'react';
import { db } from '../../Firebase/Firebase';
import firebase from 'firebase'

const Feed = () => {

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: "Kiran N Chavan",
            description: "This is desc",
            message: input,
            photUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }

    return (
        <div className="feet">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feet__inputOptions">
                    <InputOptions title="Photo" Icon={ImageIcon} color="#7085F9 " />
                    <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E " />
                    <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOptions title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E " />
                </div>
            </div>

            {/* Posts  */}
            {
                posts?.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    /> 
                ))
            }
        </div>
    )
}

export default Feed
