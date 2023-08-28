import { NextResponse } from "next/server";
import { Hercai } from "hercai";
import { autoParagraph } from "@/lib/auto-paragraph";

export async function POST (request) {
  try {
    const req = await request.json();
    const {prompt} = req;
    const client = new Hercai();
    const reply = await client.question({model:"v2",content:`${prompt}.`}).then(async (response) => {
      return autoParagraph(response.reply);
    });
    return NextResponse.json({message: autoParagraph(reply)}, {status: 200});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 400});
  }
}