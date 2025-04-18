import { Carousel } from "antd";
import Button from "../components/button";
import Container from "../components/container";
import CallBackForm from "../components/callBack_Form";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "2px",
};

const Index = () => {
  return (
    <>
      <div className="flex flex-row px-52 py-5 justify-evenly items-center bg-[#EDF2FA]">
        <div className="w-3/5 flex flex-col gap-4 py-2">
          <div className="font-bold text-4xl mb-4">
            Get up to 90% scholarship on <br />
            ALLEN Courses
          </div>
          <div className="font-bold text-xl">Register for scholarship</div>
          <div className="flex gap-2">
            <Button> Online Courses</Button>
            <Button> Offline Courses</Button>
          </div>
        </div>
        <div className="w-2/5">
          <Carousel
            autoplay={{ dotDuration: true }}
            autoplaySpeed={5000}
            className="rounded-3xl overflow-hidden"
          >
            <div>
              <img src="/carousel_1.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/carousel_2.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/carousel_3.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/carousel_4.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/carousel_5.avif" style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="ml-68 w-1/2 self-start text-3xl font-medium my-7">
          Discover the perfect online course
        </div>
        <div className="flex flex-row justify-center items-center gap-3">
          <Container
            Link_url="#"
            link="View"
            title="JEE"
            image_url="/jee_background.png"
            bg_color="#EDF2FA"
          />
          <Container
            Link_url="#"
            link="View"
            title="NEET"
            image_url="/neet_background.png"
            bg_color="#EDF2FA"
          />
          <Container
            Link_url="#"
            link="View"
            title="Class 6-10"
            image_url="/grade_6_10_background.png"
            bg_color="#EDF2FA"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 bg-[#EDF2FA] mt-8">
        <div className="ml-68 w-1/2 self-start text-3xl font-medium my-7">
          FREE tools for JEE aspirants
        </div>
        <div className="flex flex-row justify-center items-center gap-3 mb-5">
          <Container
            Link_url="#"
            link="Predict Now"
            title="JEE Main - Percentile Predictor"
            image_url="/jee_percentile.png"
            bg_color="#FFFFFF"
          />
          <Container
            Link_url="#"
            link="Predict Now"
            title="JEE Main - Rank Predictor"
            image_url="/jee_rank.png"
            bg_color="#FFFFFF"
          />
          <Container
            Link_url="#"
            link="Check Now"
            title="JEE Main - Answer Key"
            image_url="/jee_answerKey.png"
            bg_color="#FFFFFF"
          />
        </div>
      </div>
      <div className="h-96 flex flex-col justify-content items-center gap-4 p-4">
        <div className="font-medium text-2xl mt-4">What's trending!!</div>
        <div className="w-3/4 ">
          <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} className="rounded-3xl overflow-hidden">
          <div>
              <img src="/banner_1.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_2.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_3.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_4.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_5.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_6.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_7.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_8.avif" style={contentStyle} />
            </div>
            <div>
              <img src="/banner_9.avif" style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 gap-5 bg-[#EDF2FA]">
        <div className="font-medium text-2xl mt-4">Meet our Champions</div>
        <div className="w-3/4">
          <img src="/Topper.avif" alt="Toppers_images"/>
        </div>
        <div className="flex flex-row gap-10">
          <Button className="">
            View JEE Main 2025 Result &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </Button>
          <Button className="">
            View Neet 2024 Result &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </Button>
        </div>
      </div>
      <div className="flex flex-1/2 h-96 justify-center items-center my-10 gap-8">
        <img src="/callback_prop.avif" alt="Callback_Image" className="h-80 mt-7"/>
        <div className="flex flex-col gap-4 w-175 rounded bg-[#EDF2FA] p-4 shadow-2xl">
          <p className="font-medium text-xl">Request a callback</p>
          <hr />
          <CallBackForm />
        </div>
      </div>
    </>
  );
};

export default Index;
