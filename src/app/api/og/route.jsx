import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET({ params }) {
    const fontData = await fetch(
        new URL("../../Inter-ExtraBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
  
  // ?title=<title>
  const hasTitle = searchParams.has('title');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'My default title';

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
        <p style={{ color: "white"}}>{title}</p>
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
