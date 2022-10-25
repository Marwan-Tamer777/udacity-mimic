import Footer from "../Util/Footer";
import Nav from "../Util/Nav";
import CourseList from "./CourseList";
import Search from "./Search";
import SponsorsAndSpecials from "./SponsorsAndSpecials";
import Welcome from "./WelcomeM";


const Homepage = () => {
  return (
    <div className="flex flex-row ">
      <Nav />
      <div className=" overflow-y-auto transition-all duration-500">
        <Welcome />
        <Search />
        <CourseList />
        <SponsorsAndSpecials />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
