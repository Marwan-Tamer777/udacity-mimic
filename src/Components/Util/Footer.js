import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){

    return (
      <div className="flex flex-row justify-between content-between flex-wrap text-udacity-text-header p-10">
        <div className=" flex flex-col justify-between items-start">
          <h5 className="text-lg">
            Made with ❤ by{" "}
            <a
              href="https://marwantamer.netlify.app/"
              target={"_blank"}
              rel={"noreferrer"}
              className="text-udacity-interactive-click"
            >
              Marwan Tamer
            </a>
            .
          </h5>
          <div className=" text-sm font-light tracking-wide">
            Some icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              className="text-udacity-interactive-click"
            >
              Freepik
            </a>
            <br />
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              className="text-udacity-interactive-click"
            >
              www.flaticon.com
            </a>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <h5 className="text-lg">Social Links:</h5>
          </div>

          <div className="flex flex-col ml-4 gap-2 justify-between items-center text-black ">
            <a
              href="https://github.com/thetimelord777"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className="h-[2rem] w-[2rem]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/marwan-tamer/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="h-[2rem] w-[2rem]"
              />
            </a>
          </div>
        </div>
      </div>
    );
}