import SecondaryButton from "./SecondaryButton";
import SocialLink from "./SocialLink";

const IntroductionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
      <div>
        <iframe
          className="w-11/12 rounded-lg shadow-md mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ezb7_tNgRFE?si=y2L8_vJP1xFtUSfY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h1 className="text-3xl font-Mooli font-bold">About Me</h1>
        <h2 className="font-Raleway text-gray-500">
          Mern Stack Website Developer
        </h2>
        <div className="my-4">
          <p className="text-sm font-Mooli tracking-tighter text-gray-600">
            One of my skills is that I can write clean and readable code. I love
            solving complex programming problems. I am very willing to work in a
            team. I can build very nice user-friendly websites by using React JS
            or Next JS and Tailwind CSS. I solved the user identification
            problem by using firebase. I can specify what the user can do. I can
            do work with MongoDB and Express JS on the back end. All the tasks
            related to MongoDB Crud Operation can be done with the Express JS
            server.
            <br /><br />
            I have valuable teamwork experience as a backend developer and possess comprehensive knowledge of Git, enabling me to proficiently manage branches and create pull requests. My background includes actively contributing to open-source projects, where I've demonstrated my ability to introduce new features, customize component designs, and incorporate additional React components.
          </p>
          <SocialLink/>
          <SecondaryButton link="/">Learn More About me</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
