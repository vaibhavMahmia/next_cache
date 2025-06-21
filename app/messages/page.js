import { Messages } from "@/components/messages";
import { getMessages } from "@/lib/messages";

export const revalidate = 10; //send api req after 10 sec even if keep on reloading.
//export const dynamic = 'force-dynamic'        //It means caches not stored always fetches fresh data from api.
//export const dynamic = 'force-static'; 
const MessagesPage = async () => {
  const messages = await getMessages();

  if (!messages || messages.length === 0) return <p>No messages found</p>;

  return <Messages messages={messages} />;
}

export default MessagesPage;
