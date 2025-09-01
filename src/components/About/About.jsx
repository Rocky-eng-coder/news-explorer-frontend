import "./About.css";
import authorImage from "../../assets/images/authorImage.jpg";
function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="Author" className="about__image" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          I am Racquel Bryant and I am a Software Engineer TripleTen student.
          The technologies that I am currently skilled in include HTML, CSS,
          Figma, JavaScript, React, and mongoDB.
        </p>
        <p className="about__paragraph">
          I started TripleTen last year in August and have learned a lot along
          the way. I am excited to complete the program and begin my career
          acceleration process.
        </p>
      </div>
    </section>
  );
}

export default About;
