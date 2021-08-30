import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from '../InputOptions/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';

const Feed = () => {

    const [posts, setPosts] = useState([])

    const sendPost = (e) => {
        e.preventDefault();

        setPosts(...posts)
    }

    return (
        <div className="feet">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" />
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
                posts?.map(post => (
                    <Post/> 
                ))
            }
            <Post name="Kiran Chavan" description="This is desc" message="wow this is msg"  />
        </div>
    )
}

export default Feed
