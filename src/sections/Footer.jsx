import {
  BlackC,
  BlueIcon,
  Facebook,
  IconLine,
  Instagram,
  Linkedin,
  Scissor,
  SecondBlue,
  Twitter,
} from "../components/Icon";

const Footer = () => {
  return (
    <footer
      className="xs:w-full xs:my-0 xs:mx-auto  sm:flex  justify-around px-8 pt-14"
      id="footer relative"
    >
      <>
        <div className="lg:mx-14">
          <span className="flex items-center my-4">
            <BlackC />
            <IconLine />
            <Scissor className={""} />
          </span>
          <span className="flex items-center py-4 gap-4">
            <Twitter />
            <Instagram />
            <Linkedin />
            <Facebook />
          </span>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 w-1/2">
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Why Scissor ?</h1>
            <p>Scissor 101</p>
            <p>Integrations & API</p>
            <p>Pricing</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Solutions</h1>
            <p> Social Media</p>
            <p>Digital Marketing</p>
            <p>Customer Service</p>
            <p>For Developers</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Products</h1>
            <p> Link Management</p>
            <p>QR Codes</p>
            <p>Link-in-bio</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Company</h1>
            <p> About Scissor</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Reviews</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Resources</h1>
            <p> Blog</p>
            <p>Resource Library</p>
            <p>Developers</p>
            <p>App Connectors</p>
            <p>Support</p>
            <p>Trust Center</p>
            <p>Browser Extension</p>
            <p>Mobile App</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Features</h1>
            <p> Branded Links</p>
            <p>Mobile Links</p>
            <p>Campaign</p>
            <p>Management &</p>
            <p>Analytics</p>
            <p>QR Code generation</p>
          </article>
          <article className="text-xs leading-5 xs:mb-3">
            <h1 className="font-bold">Legal</h1>
            <p> Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms of Service</p>
            <p>Acceptable Use Policy</p>
            <p>Code of Conduct</p>
          </article>
        </div>
      </>
      <BlueIcon
        className={"xs:hidden sm:block lg:block  h-96   absolute left-0"}
      />
      <SecondBlue className={" absolute right-0   mb-0"} />
      {/* <p className="text-xs absolute right-0  mb-0">
        Term of service | Security | Scissors 2023
      </p> */}
    </footer>
  );
};

export default Footer;
