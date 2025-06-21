import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

const NewMessagePage = () => {
  const createMessage = async (formData) => {
    'use server';

    const message = formData.get('message');
    await addMessage(message);
    revalidatePath('/messages'); 
    //OR
    revalidateTag('msg');
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