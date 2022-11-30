export function TweetForm({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault()
    
        const name = event.target.name.value;  //nameRef.current.value;
        const content = event.target.content.value;
    
        const newTweet = {
          name,
          content,
          like: 0
        }
        onSubmit(newTweet);
      }
    return (
        <form onSubmit={handleSubmit} className='tweet-form'>
          <h3>New Tweet</h3>
          <input type="text" name='name' placeholder='name'  />   
          <input type="content" name='content' placeholder='content' />
          <button type="submit">Soumettre</button>
      </form>
    );
}