import { MainLayout } from "../layouts";

const About = () => {
  return (
    <MainLayout>
      <div className="page-container">
        <h1>About Us</h1>
        <p>Learn more about Electro Store and our mission.</p>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Electro Store has been serving customers with quality electronics for over a decade. We pride ourselves on offering the latest technology at competitive prices.</p>
          
          <h2>Our Mission</h2>
          <p>To provide customers with access to the latest technology and electronics while delivering exceptional customer service.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;