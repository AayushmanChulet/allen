import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import "../index.css"
import { ClockCircleTwoTone } from "@ant-design/icons";
import Button from "../components/button";
const Navbar = () => {
  return (
    <div>
    <div className="flex flex-row items-center justify-between p-5 font-medium">
      <div className="flex flex-row justify-center items-center gap-5">
        <Link to="/">
          <svg
            width="91"
            height="26"
            viewBox="0 0 91 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Allen logo"
            data-testid="onboardingAllenLogo"
            className="w-23 h-7"
          >
            <path
              d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z"
              fill="#005BAA"
            ></path>
          </svg>
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/test-series">Test Series</Link>
        <Link to="/results">Results</Link>
        <Link to="/books">Booka</Link>
        <Link to="/more">More</Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 ">
        <Link to="get-a-callback">
          Link
        </Link>
        <Link to="get-a-callback">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
    <div className="bg-[#019370] flex text-center p-1 h-12 items-center justify-center font-medium">
        <Link>
            <ClockCircleTwoTone />
            <span className=" text-yellow-200 pl-3 pr-1.5">
                Batches start 16 Apr✨
            </span>
            <span className="text-gray-50">
                Win up to 90% AOSAT scholarship. Register for FREE!
            </span>
        </Link>
    </div>
    </div>
  );
};

export default Navbar;
