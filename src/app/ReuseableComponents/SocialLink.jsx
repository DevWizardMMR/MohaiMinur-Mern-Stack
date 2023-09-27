import { AiFillGithub, AiFillLinkedin, AiFillFacebook  } from "react-icons/ai";
import { BsBrowserEdge } from "react-icons/bs";

const SocialLink = () => {
    return (
        <div className="flex flex-wrap gap-5 text-3xl my-5 justify-start items-center">
            <a href="https://github.com/Mohaiminur-MernStackDeveloper" target="blank"><AiFillGithub/></a>
            <a href="#" target="blank"><AiFillLinkedin/></a>
            <a href="#" target="blank"><AiFillFacebook/></a>
            <a href="#" target="blank"><BsBrowserEdge/></a>
        </div>
    );
};

export default SocialLink;