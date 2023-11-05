import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request) {
    const fontData = await fetch(
        new URL("../../Inter-ExtraBold.ttf", import.meta.url)
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
        <div tw="flex flex-row font-sans text-7xl text-center text-white w-9/12 flex-wrap justify-center">
            <p>Keep it simple.</p>
        </div>
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
