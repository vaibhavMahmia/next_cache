import { getMessages } from "@/lib/messages";

//export const dynamic = 'force-static';
const MessagesLayout = async ({ children }) => {
  const messages = await getMessages();
  const totalMessages = messages.length;

  return <>
    <h1>Important Messages</h1>
    <p>{totalMessages} messages found</p>
    <hr />
    {children}
  </>;
}

export default MessagesLayout;
