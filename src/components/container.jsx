import { Link } from "react-router";


const Container = ({ title, link, Link_url, image_url, bg_color}) => {
  return (
    <Link to={Link_url} className="block">
      <div className={'relative h-60 w-80 rounded-2xl bg-cover bg-center bg-no-repeat'} style={{ backgroundImage: `url(${image_url})`, backgroundColor : `${bg_color}`}}>
        <div className="absolute inset-0 flex flex-col justify-between p-4 font-medium text-xl">
            <div className="text-xl w-5/6">{title}</div>
            <div className="text-[#025FCA]">{link} &gt;</div>
        </div>
      </div>
    </Link>
  );
};
export default Container;
