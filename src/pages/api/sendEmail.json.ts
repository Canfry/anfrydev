import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async ({ params, request }) => {
  const send = await resend.emails.send({
    from: 'info@anfrydev.com',
    to: 'frybcn@gmail.com',
    subject: 'hello world',
    html: '<p>Hi</p>',
    text: 'it works!',
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    );
  }
};
