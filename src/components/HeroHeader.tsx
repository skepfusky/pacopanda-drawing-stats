import Head from "next/head";

export default function HeroHeader() {
  let SITE_TITLE = "Paco Panda Drawing Stas - Under Construction";
  let SITE_DESCRIPTION =
    "A data viz project that collects drawings from a furry artist and illustrator Paco Panda, currently under construction.";
  let url = "https://pacopanda-drawing-stats.skepfusky.xyz/";

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:name" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@skepfuskyjs" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <meta name="twitter:image" content={`${url}og-image.png`} />
        <link rel="canonical" href={url} />
      </Head>
      <article className="flex flex-col  items-center text-center mt-24 mb-16 max-w-screen-lg mx-auto px-10">
        <h1 className="hero font-extrabold lg:text-5xl text-4xl lg:w-[45%] w-[65%] mx-auto">
          PDS
        </h1>
        <span className="text-sm">(Yes original name I know)</span>
        <p className="pt-3 text-xl">
          An open source data visualization project created by @skepfuskyjs that
          collects drawings from a furry artist and illustrator Paco Panda,
          written in TypeScript and Python
        </p>
        <div className="m-2 bg-red-100 px-4 py-3 rounded-md">
          This project is under construction, this project is open source lol
        </div>
      </article>
    </>
  );
}
