import React, { useState } from 'react';

// Comment component
export const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]);

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    const newReply = { text: replyText, replies: [] };
    setReplies([...replies, newReply]);
    setReplyText('');
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={handleToggleReplies}>
        {showReplies ? 'Hide Replies' : 'Show Replies'}
      </button>
      {showReplies && (
        <div className="replies">
          {replies.map((reply, index) => (
            <Comment key={index} comment={reply} />
          ))}
          <form onSubmit={handleReplySubmit}>
            <input
              type="text"
              placeholder="Write a reply"
              value={replyText}
              onChange={handleReplyChange}
            />
            <button type="submit">Reply</button>
          </form>
        </div>
      )}
    </div>
  );
};