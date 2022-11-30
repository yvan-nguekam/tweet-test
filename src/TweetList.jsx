import { Tweet } from './Tweet';

export function TweetList({ tweets, onDelete, onLike }) {
    if (!tweets || tweets.lenght === 0) {
        return "No Tweets"
    }

    return (
        <div className="tweet-container">
        {tweets.map(tweet => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              content={tweet.content}
              like={tweet.like}
              onDelete={onDelete}
              onLike={onLike}
            />
          );
          })}
      </div>
    );
}