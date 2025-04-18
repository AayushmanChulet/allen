import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, XOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = ( ) => {
    return(<div className="flex flex-col bg-[#EDF2FA] justify-center items-center text-gray-600">
        <div className="flex flex-row justify-center items-center w-3/4 p-10 rounded">
            <img src="\footer.avif" alt="footer_img"/>
        </div>
        <div className="flex flex-row justify-normal items-start gap-15 font-medium text-gray-600 text-sm">
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    About
                </div>
                <div>
                    About
                </div>
                <div>
                    Blog
                </div>
                <div>
                    News
                </div>
                <div>
                    Privacy Policy
                </div>
                <div>
                    Public Notice
                </div>
                <div>
                    Careers
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    Help & Support 
                </div>
                <div>
                    Refund Policy
                </div>
                <div>
                    Terms & Conditions
                </div>
                <div>
                    Contact Us
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    Popular Goals
                </div>
                <div>
                    NEET
                </div>
                <div>
                    JEE
                </div>
                <div>
                    Class 6-10
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    Courses
                </div>
                <div>
                    Online Course
                </div>
                <div>
                    Distance Course
                </div>
                <div>
                    Online test series
                </div>
                <div>
                    NEET test series
                </div>
                <div>
                    JEE test series
                </div>
                <div>
                    Cuet test series
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    Centers
                </div>
                <div>
                    Kota
                </div>
                <div>
                    Bangalore
                </div>
                <div>
                    Indore
                </div>
                <div>
                    Delhi
                </div>
                <div>
                    More Centers
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start w-3/4">
                <div className="text-gray-800 ">
                    Exam Information
                </div>
                <div>
                    JEE Mains
                </div>
                <div>
                    JEE Advance
                </div>
                <div>
                    NEET UG
                </div>
                <div>
                    CBSE
                </div>
                <div>
                    NCERT Solution
                </div>
                <div>
                    NEET Mock test
                </div>
                <div>
                    CUET
                </div>
                <div>
                    Olympiad
                </div>
            </div>
        </div>
        <div>
            <hr/>
        </div>
        <div className="flex flex-row justify-between items-center px-8 py-6 bg-[#EDF2FA] w-3/4">
            <div className="flex flex-col gap-2 justify-start items-start">
                <div className="flex flex-row gap-1">
                <YoutubeOutlined />
                <InstagramOutlined />
                <FacebookOutlined />
                <XOutlined />
                <LinkedinOutlined />
                </div>
                <div>
                    ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
                </div>

            </div>
            <hr className="text-black bg-black"/>
            <div>
                <img src="src/assets/ISO MARK.avif" alt="ISO_IMAGE" className="h-20"/>
            </div>
        </div>

    </div>)
}

export default Footer;