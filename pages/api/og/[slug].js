import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
    const fontData = await fetch(
        new URL("../../Inter-ExtraBold.ttf", __dirname)
    ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
        }}
      >
        Keep it simple.
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
        },
      ],
    }
  );
}
