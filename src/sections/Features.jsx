import { Activity, Edit, Grid, Line, LinkIcon } from "../components/Icon";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="flex items-center justify-between bg-primaryBlue  py-7 px-10">
          <span className="text-2xl font-bold">
            <h1>One Stop.</h1>
            <h1>
              Four <span className="text-primary">Possibilities</span>.
            </h1>
          </span>

          <span className="flex  flex-col ">
            <h2 className="font-bold">3M</h2>
            <p className="text-xs">Active users</p>
          </span>
          <span className="w-24">
            <h2 className="font-semibold">60M</h2>
            <p className="text-xs">Links & QR codes created</p>
          </span>
          <span className="hidden sm:block w-28">
            <h2 className="font-semibold">1B</h2>
            <p className="text-xs">Clicked & Scanned connections</p>
          </span>
          <span className="hidden sm:block">
            <h2 className="font-semibold">300K</h2>
            <p className="text-xs">App Integrations</p>
          </span>
        </div>
        <section className="sm:grid grid-cols-2 gap-8 w-3/4 my-20 mx-auto">
          <article className="px-10">
            <span className="flex items-center font-bold">
              <Line className={"h-6"} />
              <h2 className="text-xl">
                Why choose <span className="text-primary">Scissors</span>{" "}
              </h2>
            </span>
            <p className="text-sm">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.{" "}
            </p>
          </article>
          <section className="grid grid-cols-2 gap-12">
            <div>
              <LinkIcon className={"bg-lightBlue rounded-full p-2"} />
              <h1 className="font-semibold pt-4 pb-2">URL Shortening</h1>
              <p className="text-sm">
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div>
              <Edit className={"bg-lightBlue rounded-full p-2"} />
              <h1 className="font-semibold pt-4 pb-2">Custom URLs</h1>
              <p className="text-sm">
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
            <div>
              <Grid className={"bg-lightBlue rounded-full p-2"} />
              <h1 className="font-semibold pt-4 pb-2">QR Codes</h1>
              <p className="text-sm">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div>
              <Activity className={"bg-lightBlue rounded-full p-2"} />
              <h1 className="font-semibold pt-4 pb-2">Data Analytics</h1>
              <p className="text-sm">
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Features;
