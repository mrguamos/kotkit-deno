import { h, JSX } from "preact";
import { useState } from "preact/hooks";
const path = "/api/download";

const DownloadForm = () => {
  const [url, setUrl] = useState("");
  const showAds = () => {
    const script = document.createElement('script')
    script.src = '//arsnivyr.com/1?z=5653509'
    script.async = false
    script.setAttribute('data-cfasync', 'false')
    document.querySelector('head')?.appendChild(
      script,
    )
  }
  return (
    <>
      <div class="flex w-full flex-col items-center gap-y-5">
        <input
          onInput={(e: JSX.TargetedEvent<HTMLInputElement, Event>) =>
            setUrl(e.currentTarget.value)}
          type="text"
          placeholder="Paste URL here"
          class="w-full max-w-sm rounded-md p-2 text-center text-black"
        />
        <a
          onClick={showAds}
          href={`${path}?url=${url}`}
          target="_blank"
          class="w-48 rounded-md border-2 border-green-500 py-2 px-4 text-center"
        >
          Download
        </a>
      </div>
    </>
  );
};

export default DownloadForm;
