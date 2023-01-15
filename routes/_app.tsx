import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { apply, css } from "twind/css";

export default function App({ Component }: AppProps) {
  tw(
    css({
      ":global": {
        body: apply`bg-black text-white`,
      },
    }),
  );
  return (
    <>
      <Head>
        <title>TikTok Downloader</title>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Component />
    </>
  );
}
