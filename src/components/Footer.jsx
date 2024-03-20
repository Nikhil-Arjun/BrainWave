import Section from "./Section";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <footer className="max-container">
          <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start">
              <a href="/">
                <img
                  src="src\assets\brainwave.svg"
                  alt="logo"
                  width={150}
                  height={46}
                  className="m-0"
                />
              </a>
              <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                Unlock the Power of Your Product with Brainwave AI: Where
                Innovation Meets Intelligence!
              </p>

              <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((icon) => (
                  <div
                    className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                    key={icon.alt}>
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                        key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img
                src="src\assets\icons\copyright-sign.svg"
                alt="copyright sign"
                width={20}
                height={20}
                className="rounded-full m-0"
              />
              <p>Copyright. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer">
              Terms & Conditions <br /> Build by - Nikhil Arjun
            </p>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default Footer;
