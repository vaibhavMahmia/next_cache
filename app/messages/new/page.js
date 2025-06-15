import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';

const NewMessagePage = () => {
  const createMessage = async (formData) => {
    'use server';

    const message = formData.get('message');
    await addMessage(message);
    redirect('/messages');
  }

  return <>
    <h2>New Message</h2>
    <form action={createMessage}>
      <p className="form-control">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required rows="5" />
      </p>

      <p className="form-actions">
        <button type="submit">Send</button>
      </p>
    </form>
  </>;
}

export default NewMessagePage;