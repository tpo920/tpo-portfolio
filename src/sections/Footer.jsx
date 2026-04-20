import { SocialIconsData } from '../utils/Socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <p>
            <span className="font-semibold">Yay</span>, you made it to the end!
          </p>
          <p className="text-[12px] italic">Here's a cookie 🍪</p>
        </div>
        <div className="socials">
          {SocialIconsData.map((social) => (
            <a
              className="icon"
              target="_blank"
              key={social.url}
              href={social.url}
            >
              <img src={social.imgPath} alt={social.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center items-centert">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Trevor Po. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
