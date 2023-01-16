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
        <meta name="description" content="Deno Fresh TikTok Downloader"/>
        <meta name="monetag" content="f1daa5e468c43e7f4b35d2256e5b0daa"/>
        <link rel="stylesheet" href="/app.css" />
        <script data-cfasync="false" type="text/javascript" src="/js/banner-adblock.js"></script>
        <script type="text/javascript" src="/js/banner-adblock-ext.js"></script>
      </Head>
      <Component />
    </>
  );
}
