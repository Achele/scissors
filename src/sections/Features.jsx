import { Activity, Edit, Grid, Line, LinkIcon } from "../components/Icon";

const Features = () => {
  return (
    <>
      <section>
        <div className="flex items-center">
          <h1>
            One Stop Four <span>Possibilities</span>
          </h1>
          <span className="flex ">
            <h2>3M</h2>
            <p>Active users</p>
          </span>
          <span>
            <h2>60M</h2>
            <p>Links & QR codes created</p>
          </span>
          <span>
            <h2>1B</h2>
            <p>Clicked & Scanned connections</p>
          </span>
          <span>
            <h2>300K</h2>
            <p>App Integrations</p>
          </span>
        </div>
        <article>
          <span>
            <Line />
            <h2>
              Why choose <span>Scissors</span>{" "}
            </h2>
          </span>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </article>
        <div>
          <LinkIcon />
          <h1>URL Shortening</h1>
          <p>
            Scissor allows you to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <Edit />
          <h1>Custom URLs</h1>
          <p>
            With Scissor, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>
        <div>
          <Grid />
          <h1>QR Codes</h1>
          <p>
            Generate QR codes to your business, events. Bring your audience and
            customers to your doorstep with this scan and go solution.
          </p>
        </div>
        <div>
          <Activity />
          <h1>Data Analytics</h1>
          <p>
            Receive data on the usage of either your shortened URL, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </section>
    </>
  );
};

export default Features;
