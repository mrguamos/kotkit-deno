import { Head } from "$fresh/runtime.ts";
import DownloadForm from "../islands/DownloadForm.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="flex min-h-screen w-full flex-col items-center justify-center space-y-10 bg-black text-white">
        <div class="flex flex-col">
          <span class="absolute flex h-2 w-2 animate-ping place-self-end rounded-full bg-red-500 opacity-75" />
          <span class="relative text-center text-7xl font-extrabold text-yellow-500 ">
            TikTok <span class="text-white">Downloader</span>
          </span>
        </div>
        <DownloadForm />
      </div>
    </>
  );
}
