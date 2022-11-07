import {Component} from 'react'
import {connect} from 'react-redux'
import practical from '../../Images/practical.svg'
import training from '../../Images/training.svg'
import ideas from "../../Images/ideas.svg";
import hosting from '../../Images/hosting.svg'
import courses from "../../Images/courses.svg";
import academy from "../../Images/academy.svg";
import expert from "../../Images/expert.svg";
import community from "../../Images/community.svg";

class SponsorsSpecialsPage extends Component {

  /**
   * 
   * the images provided in this part are from udacity.com and elzeor.org respectively and used
   * as part of this personal project.
   */
    render() {
      return (
        <div className="my-4 text-udacity-text-black">
          <div>
            <h3 className="mr-auto text-udacity-text-header font-bold ml-3 my-4 ">
              What makes us special?
            </h3>
            <div className=" flex flex-row flex-wrap justify-center items-start gap-6">
              <div className="basis-[20%]">
                <img
                  src={practical}
                  alt="Practical"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Practical Application
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  We offer practical project to train, enhance and imprint your
                  newly acquired skills!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={training}
                  alt="Training"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Contests and Training
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  We would love you to share in put contests and training
                  questions to become a better developer!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={ideas}
                  alt="Ideas"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Innovative Ideas
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  Our Educative system ensures that you will use all the skills
                  you gain and will never waste time!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={hosting}
                  alt="Hosting"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Free Hosting
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  If you make a beautiful design and elegant, we will add it to
                  a folder under your name so you can access it!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={courses}
                  alt="Courses"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Free Courses
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  All courses are free with no subscription need whatsoever! we
                  only hope to spread knowledge
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={academy}
                  alt="Academic"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Academic-level Education
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  Here we offer Creative, And Innovative Academic teaching. So
                  you understand everything the right way!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={expert}
                  alt="Expert"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Your Path to Becoming an Expert
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  Learn the right steps to becoming and expert so you don't
                  waste your time!
                </p>
              </div>
              <div className="basis-[20%]">
                <img
                  src={community}
                  alt="Community"
                  className=" object-cover w-[60%] h-[60%] mx-auto my-4"
                />
                <h5 className="text-center font-bold text-udacity-text-header">
                  Our Active Community
                </h5>
                <p className="text-center font-thin text-udacity-text-black">
                  Join our facebook to get help from passionate people like
                  yourself!
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className=" mr-auto text-udacity-text-header font-bold ml-3 my-6">
              Powered by the industry just for you!
            </h3>
            <div className="flex flex-row flex-wrap justify-around items-center">
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2UtwS6ncaXmx6WqVEO6Oub/8d19d851b14ab6b913669fae6ca3a8b5/google-logo.png?fm=webp&q=100"
                alt="img1"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5cvkzOuNDF7ufQuiGnWEde/5084a36dd91a11028bbeb722f7f21818/aws-logo.png?fm=webp&q=100"
                alt="img2"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2peqKnHw89OvG9dNgzqsFL/a5795ff607036d37505cffa42fdddee1/mode-logo.png?fm=webp&q=100"
                alt="img3"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3ia9REv0wKYiEEXMEERLf1/7f9ac4f31d4183c5fd4d660b7177b7a2/alteryx-logo.png?fm=webp&q=100"
                alt="img4"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6FHSYdz556PxJKVXfiyLSN/547b71cad54a60050e378a5dca14e834/ibm-logo.png?fm=webp&q=100"
                alt="img5"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3kGWSPzG7LPV7JJ9CSPtUX/1b5b6834edbfb1e577271bd182ba1f92/microsoft-logo.png?fm=webp&q=100"
                alt="img6"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6qNF9DiK0Fylqh4iDepDkp/29663f48299077e1e3ed22ae11922ce9/Intel-logo.png?fm=webp&q=100"
                alt="img7"
                className="basis-[10%] object-cover"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3PZY3lsFdMavhdGaA37uOx/f4088cc9f654b9266697e75961bd9bac/uipath-logo.png?fm=webp&q=100"
                alt="img8"
                className="basis-[10%] object-cover"
              />
            </div>
          </div>
        </div>
      );
  }
}

export default connect()(SponsorsSpecialsPage);
