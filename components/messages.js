export const Messages = ({ messages }) => <ul className="messages">
    {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
    ))}
</ul>;