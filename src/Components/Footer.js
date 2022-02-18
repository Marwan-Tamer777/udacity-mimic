import './css/Footer.css'
import "./css/main.css";

export default function Footer(){

    return (
      <div className="flex flex-row justify-between content-between bg-gradient-to-br from-blue-400 via-blue-600 to-green-500 rounded-xl shadow-xl mx-5  mt-5 p-10">
        <div id="Footer_message">
          <h5 className="text-lg font-medium p-2">
            Made with ❤ love by Marwan Tamer.
          </h5>
        </div>
        <div id="Footer_social">
          <h5 className="text-lg font-semibold">Social Links:</h5>

          <div className="p-2 bg-gray-700 hover:bg-gray-500 rounded-3xl">
            <a
              href="https://github.com/thetimelord777"
              rel="noreferrer"
              target="_blank"
              className="font-medium text-white uppercase"
            >
              {" "}
              github
            </a>
          </div>
          <div className="p-2 bg-gray-700 hover:bg-gray-500 rounded-3xl">
            <a
              href="https://www.facebook.com/marwam.tamer"
              rel="noreferrer"
              target="_blank"
              className="font-medium text-white uppercase"
            >
              {" "}
              Facebook
            </a>
          </div>
        </div>

        <div className=" text-sm font-light tracking-wide">
          Some icons made by{" "}
          <a
            href="https://www.freepik.com"
            title="Freepik"
            className=" text-purple-700"
          >
            Freepik
          </a>
          <br />
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className=" text-purple-700"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    );
}