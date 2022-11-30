import { useRef, useState } from 'react';

import { TweetForm } from './TweetForm';
import { TweetList } from './TweetList'

const DEFAULT_TWEET = [
  {
    id: 1,
    name: "yvan1",
    content: "je vais bien",
    like: 1000
  },
  {
    id: 2,
    name: "yvan2",
    content: "cool",
    like: 50
  },
  {
    id: 3,
    name: "yvan3",
    content: "Super",
    like: 0
  },
  {
    id: 4,
    name: "yvan4",
    content: "FUN",
    like: 12
  },
];

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);
  // const nameRef = useRef();

  // const handleSubmit = (tweet) => {

  //   addTweet(newTweet);
  // }

  const addTweet = (tweet) => {
    
    setTweets((curr) => {

      const newTweet = {
        id: curr[curr.length -1]?.id + 1 ?? 0,
        name: tweet.name,
        content: tweet.content,
        like: 0
      };

      [...tweets, newTweet];
    });
  }

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId))
  }

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    })
  }

  return {onLike, onDelete, addTweet, tweets}
}

function App() {

  const {onLike, onDelete, addTweet, tweets} = useTweets();

  return(
    <div >
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}

export default App;