import "./About.css";
import authorImage from "../../assets/images/authorImage.jpg";
function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="Author" className="about__image" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          This block will describe the project author. Here you should indicate
          your name, what you do, and which development technologies you know.
        </p>
        <p className="about__paragraph">
          You can also talk about your experience with TripeTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
