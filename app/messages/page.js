import { Messages } from "@/components/messages";

export const revalidate = 10; //send api req after 10 sec even if keep on reloading.
//export const dynamic = 'force-dynamic'        //It means caches not stored always fetches fresh data from api.
//export const dynamic = 'force-static'; 
const MessagesPage = async () => {
  const response = await fetch('http://localhost:8080/messages'); // This is called request memoization when request is sent to backend with same config, i.e. same URL, route, headers from different pages or layouts next js will memoizes those requests and send only one request.
  const messages = await response.json();

  if (!messages || messages.length === 0) return <p>No messages found</p>;

  return <Messages messages={messages} />;
}

export default MessagesPage;
