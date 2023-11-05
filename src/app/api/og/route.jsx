import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET({ params }) {
    const fontData = await fetch(
        new URL("../../Inter-ExtraBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
  console.log('slug', params.slug)
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
        <p style={{ color: "white"}}>Keep it simple.</p>
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
