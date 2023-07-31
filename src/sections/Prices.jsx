import { CheckCircle, Line } from "../components/Icon";
import styles from "../styles/Hero.module.css";

const Prices = () => {
  return (
    <section className="my-8 mx-auto w-3/4" id="prices">
      <article className="flex flex-col justify-center p-6">
        <span className="flex items-center justify-center">
          <Line className={"h-8"} />
          <h3 className="px-2 text-2xl font-semibold">
            A <span className="text-primary">price perfect</span> for your
            needs.
          </h3>
        </span>

        <p className="text-center w-2/3 my-0 mx-auto text-xs  lg:w-2/5 p-4">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </article>
      <section className="sm:flex items-center justify-center">
        <div className=" border border-lightBlue rounded-2xl py-2 px-8 mb-4">
          <p>Basic</p>
          <h2 className="font-bold py-2">Free</h2>
          <p>Free plan for all users</p>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Unlimited URL Shortening</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2"> Basic Link Analytics</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Customizable Short Links</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2">Standard Support</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Ad-supported</p>
          </div>
        </div>

        <div
          className={`${styles.bckgroundGradient} border py-16 px-6 text-white rounded-2xl  mb-4`}
        >
          <p>Professional</p>
          <h2 className="font-bold py-2 text-lg">$15/month</h2>
          <p className="text-xs px-2">Ideal for business creators</p>
          <div className="flex items-center py-4">
            <CheckCircle className={""} />
            <p className="text-xs px-2">Enhanced Link Analytics</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2">Custom Branded Domains</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Advanced Link Customization</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2">Priority Support</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Ad-free Experience</p>
          </div>
        </div>

        <div className=" border border-lightBlue rounded-2xl py-2 px-8">
          <p>Teams</p>
          <h2 className="font-bold py-2">$25/month</h2>
          <p>Share with up to 10 users</p>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Team Collaboration</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2">User Roles and Permissions</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Enhanced Security</p>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <p className="text-xs px-2">API Access</p>
          </div>
          <div className="flex items-center py-4">
            <CheckCircle />
            <p className="text-xs px-2">Dedicated Account Manager</p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center py-14">
        <button className="border rounded-full border-primary text-primary py-2 px-4 text-xs mr-4">
          Get Custom Pricing
        </button>
        <button className="border rounded-full bg-primary text-white py-2 px-9 text-xs">
          Select Pricing
        </button>
      </div>
    </section>
  );
};

export default Prices;
