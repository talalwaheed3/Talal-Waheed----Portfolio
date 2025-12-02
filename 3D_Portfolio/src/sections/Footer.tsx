import { socialImgs } from "../const";
import GitHubIcon from "../icons/github.svg?react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start  items-center">
          {/* <a href="/">Visit My Blog</a> */}
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              {img.name === "github" ? (
                <GitHubIcon className="text-white fill-white" />
              ) : (
                <img src={img.imgPath} alt={img.name} />
              )}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Talal Waheed | Web Developer. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
