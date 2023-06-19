import { CheckCircle } from "../components/Icon";

const Prices = () => {
  return (
    <section>
      <h3>
        A <span>price perfect</span> for your needs.
      </h3>
      <p>
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>
      <section className="flex items-center justify-center">
        <div className="border p-2">
          <p>Basic</p>
          <h2>Free</h2>
          <p>Free plan for all users</p>
          <div className="flex items-center">
            <CheckCircle />
            <p>Unlimited URL Shortening</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Basic Link Analytics</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Customizable Short Links</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Standard Support</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Ad-supported</p>
          </div>
        </div>

        <div className="border p-5">
          <p>Professional</p>
          <h2>$15/month</h2>
          <p>Ideal for business creators</p>
          <div className="flex items-center">
            <CheckCircle />
            <p>Enhanced Link Analytics</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Custom Branded Domains</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Advanced Link Customization</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Priority Support</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Ad-free Experience</p>
          </div>
        </div>

        <div className="border p-2">
          <p>Teams</p>
          <h2>$25/month</h2>
          <p>Share with up to 10 users</p>
          <div className="flex items-center">
            <CheckCircle />
            <p>Team Collaboration</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>User Roles and Permissions</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Enhanced Security</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>API Access</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p>Dedicated Account Manager</p>
          </div>
        </div>
      </section>
      <div>
        <button className="border rounded-full">Get Custom Pricing</button>
        <button className="border rounded-full bg-blue-950">
          Select Pricing
        </button>
      </div>
    </section>
  );
};

export default Prices;
