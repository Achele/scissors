import {
  BlackC,
  Facebook,
  IconLine,
  Instagram,
  Linkedin,
  Scissor,
  Twitter,
} from "../components/Icon";

const Footer = () => {
  return (
    <footer className="sm:flex">
      <div>
        <span className="flex items-center">
          <BlackC />
          <IconLine />
          <Scissor className={""} />
        </span>
        <span className="flex items-center">
          <Twitter />
          <Instagram />
          <Linkedin />
          <Facebook />
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        <article>
          <h1>Why Scissor ?</h1>
          <p>Scissor 101</p>
          <p>Integrations & API</p>
          <p>Pricing</p>
        </article>
        <article>
          <h1>Solutions</h1>
          <p> Social Media</p>
          <p>Digital Marketing</p>
          <p>Customer Service</p>
          <p>For Developers</p>
        </article>
        <article>
          <h1>Products</h1>
          <p> Link Management</p>
          <p>QR Codes</p>
          <p>Link-in-bio</p>
        </article>
        <article>
          <h1>Company</h1>
          <p> About Scissor</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Press</p>
          <p>Contact</p>
          <p>Reviews</p>
        </article>
        <article>
          <h1>Resources</h1>
          <p> Blog</p>
          <p>Resource Library</p>
          <p>Developers</p>
          <p>App Connectors</p>
          <p>Support</p>
          <p>Trust Center</p>
          <p>Browser Extension</p>
          <p>Mobile App</p>
        </article>
        <article>
          <h1>Features</h1>
          <p> Branded Links</p>
          <p>Mobile Links</p>
          <p>Campaign</p>
          <p>Management &</p>
          <p>Analytics</p>
          <p>QR Code generation</p>
        </article>
        <article>
          <h1>Legal</h1>
          <p> Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Terms of Service</p>
          <p>Acceptable Use Policy</p>
          <p>Code of Conduct</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
