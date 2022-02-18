import './css/SponsorsAndSpecials.css'
import {Component} from 'react'
import {connect} from 'react-redux'
import "./css/main.css";

class SponsorsSpecialsPage extends Component {

    render() {
      return (
        <div>
          <div className="Special">
            <h1 className=" font-extrabold text-center text-gray-700 p-10 text-4xl">
              What makes us special?
            </h1>
            <div className="Special_container">
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/practical.svg"
                  alt="Practical"
                />
                <h5>Practical Application</h5>
                <p>
                  We offer practical project to train, ehance and imprint your
                  newly acquired skills!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/trainings.svg"
                  alt="Training"
                />
                <h5>Contests and Training</h5>
                <p>
                  We would love you to share in put contests and training
                  questions to become a better developer!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/ideas.svg"
                  alt="Ideas"
                />
                <h5>Innovative Ideas</h5>
                <p>
                  Our Educative system ensures that you will use all the skills
                  you gain and will never waste time!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/hosting.svg"
                  alt="Hosting"
                />
                <h5>Free Hosting</h5>
                <p>
                  If you make a beatuiful design and elegant, we will add it to
                  a folder under your name so you can access it!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/courses.svg"
                  alt="Courses"
                />
                <h5>Free Courses</h5>
                <p>
                  All courses are free with no subscription need whatsoever! we
                  only hope to spread knowledge
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/academy.svg"
                  alt="Academic"
                />
                <h5>Academic-level Education</h5>
                <p>
                  Here we offer Creative, And Innovative Academic teaching. So
                  you understand everthing the right way!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/expert.svg"
                  alt="Expert"
                />
                <h5>Your Path to Becoming an Expert</h5>
                <p>
                  Learn the right steps to becoming and expert so you don't
                  waste your time!
                </p>
              </div>
              <div>
                <img
                  src="https://elzero.org/wp-content/themes/elzero/imgs/features/community.svg"
                  alt="Community"
                />
                <h5>Our Active Community</h5>
                <p>
                  Join our facebook to get help from passionate people like
                  yourself!
                </p>
              </div>
            </div>
          </div>

          <div className="Sponsors">
            <h3 className=" font-bold text-center text-gray-700 p-10 text-2xl">
              Powered by the industry just for you!
            </h3>
            <div className="Sponsors_logos">
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2UtwS6ncaXmx6WqVEO6Oub/8d19d851b14ab6b913669fae6ca3a8b5/google-logo.png?fm=webp&q=100"
                alt="img1"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5cvkzOuNDF7ufQuiGnWEde/5084a36dd91a11028bbeb722f7f21818/aws-logo.png?fm=webp&q=100"
                alt="img2"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2peqKnHw89OvG9dNgzqsFL/a5795ff607036d37505cffa42fdddee1/mode-logo.png?fm=webp&q=100"
                alt="img3"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3ia9REv0wKYiEEXMEERLf1/7f9ac4f31d4183c5fd4d660b7177b7a2/alteryx-logo.png?fm=webp&q=100"
                alt="img4"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6FHSYdz556PxJKVXfiyLSN/547b71cad54a60050e378a5dca14e834/ibm-logo.png?fm=webp&q=100"
                alt="img5"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3kGWSPzG7LPV7JJ9CSPtUX/1b5b6834edbfb1e577271bd182ba1f92/microsoft-logo.png?fm=webp&q=100"
                alt="img6"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6qNF9DiK0Fylqh4iDepDkp/29663f48299077e1e3ed22ae11922ce9/Intel-logo.png?fm=webp&q=100"
                alt="img7"
              />
              <img
                src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3PZY3lsFdMavhdGaA37uOx/f4088cc9f654b9266697e75961bd9bac/uipath-logo.png?fm=webp&q=100"
                alt="img8"
              />
            </div>
          </div>
        </div>
      );
  }
}

export default connect()(SponsorsSpecialsPage);
