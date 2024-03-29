"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function postEntry(formdata: FormData){
    "use server";

    const data = await prisma.guestbook.create({
        data: {
            message: formdata.get("entry") as string,
            username: "hello",
        },
    });

    revalidatePath("/guestbook");
}