import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!request.body) {
      return Response.json({ error: "Nenhum dado informado" }, { status: 400 });
    }

    const body = await request.text();
    console.log('body :>> ', body);

    // const { email, name, message } = await request.json();
    const { email, name, message } = JSON.parse(body);
    
    const { data, error } = await resend.emails.send({
      from: email,
      to: [process.env.EMAIL_ADDRESS?.toString() || ""],
      subject: `Nova mensagem de ${name}`,
      react: await EmailTemplate({ name, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
