import React from 'react';

const NotificationCard = ({ type, title, body, className }) => {
    console.log('notif');
    return (
        <article className={`message ${type === 'success' ? 'is-success' : 'is-danger'} ${className}`}>
            <div className="message-header">
                <p>{title}</p>
                <button className="delete"> </button>
            </div>
            <div className="message-body">
                {body}
            </div>
        </article>
    );
};

export default NotificationCard;
