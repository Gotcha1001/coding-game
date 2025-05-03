//origional verison from the lesson 

// import { AssemblyAI } from "assemblyai";
// import { NextResponse } from "next/server";

// const assemblyAi = new AssemblyAI({ apiKey: process.env.ASSEMBLY_API_KEY })

// export async function GET(req) {

//     const token = await assemblyAi.realtime.createTemporaryToken({ expires_in: 3600 })
//     return NextResponse.json(token)
// }






// /api/getToken/route.js or /app/api/getToken/route.js
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Direct API call to AssemblyAI for temporary token
        const response = await fetch("https://api.assemblyai.com/v2/realtime/token", {
            method: "POST",
            headers: {
                "authorization": process.env.ASSEMBLY_API_KEY,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                expires_in: 3600, // Token valid for 1 hour
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to get token: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Successfully obtained AssemblyAI token");

        return NextResponse.json(data.token);
    } catch (error) {
        console.error("Error getting AssemblyAI token:", error);
        return NextResponse.json(
            { error: "Failed to get AssemblyAI token" },
            { status: 500 }
        );
    }
}






// import { NextResponse } from "next/server";

// const { AssemblyAI } = require("assemblyai");

// const assemblyAi = new AssemblyAI({ apiKey: process.env.ASSEMBLY_API_KEY })

// export async function GET(req) {
//     try {
//         const token = await assemblyAi.realtime.createTemporaryToken({ expires_in: 3600 })
//         return NextResponse.json(token)
//     } catch (error) {
//         // Handle the paid-only feature error
//         console.error("AssemblyAI error:", error.message)

//         // Return a helpful error message with 402 Payment Required status
//         return NextResponse.json(
//             {
//                 error: "AssemblyAI requires a payment method",
//                 message: "This feature requires a credit card to be added to your AssemblyAI account",
//                 url: "https://app.assemblyai.com/"
//             },
//             { status: 402 }
//         )
//     }
// }