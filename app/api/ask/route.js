import { NextResponse } from "next/server";
import { Hercai } from "hercai";

export async function POST (request) {
  try {
    const req = await request.json();
    const {prompt, previousResponse} = req;
    const client = new Hercai();

    if (prompt.includes("image:")) {
      const image = await client.drawImage({model:"v2",prompt: `${prompt}`});
      console.log(image);
      return NextResponse.json({message: image.url})
    }

    const reply = await client.question({model:"v2",content:`
    Keep your answers short and concise! \n\n
    To bold texts, wrap the text in <b>text here</b> \n\n
    You responses should either be English or Filipino! \n\n
    If the user has any follow up questions or prompts, use your previous response as a basis. \n\n
    Response for you to follow up is: ${previousResponse && previousResponse}
    The prompt or the follow up prompt is: ${prompt}. \n\n
    `}).then(async (response) => {
      return response.reply;
    });
    
    return NextResponse.json({message: reply}, {status: 200});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 400});
  }
}