/**
 * ABOUT PAGE
 *
 * Company information:
 * - Company story
 * - Mission & Vision
 * - Team information
 */

const About = () => {
  return (
    <div className="about-page">
      <div
        className="container"
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h1>About Us</h1>
        <p>Learn more about Electro Store and our mission.</p>

        <div className="about-content" style={{ marginTop: "30px" }}>
          <section style={{ marginBottom: "40px" }}>
            <h2>Our Story</h2>
            <p style={{ lineHeight: "1.6", marginTop: "15px" }}>
              Electro Store has been serving customers with quality
              electronics for over a decade. We pride ourselves on offering
              the latest technology at competitive prices. Our journey began
              in 2010 with a simple mission: to make cutting-edge technology
              accessible to everyone.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2>Our Mission</h2>
            <p style={{ lineHeight: "1.6", marginTop: "15px" }}>
              To provide customers with access to the latest technology and
              electronics while delivering exceptional customer service. We
              believe technology should enhance lives, and we're here to help
              you find the perfect devices for your needs.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2>Why Choose Us?</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <h4>Quality Products</h4>
                <p>Only authentic products from trusted brands</p>
              </div>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <h4>Expert Support</h4>
                <p>Technical support from our experienced team</p>
              </div>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <h4>Fast Delivery</h4>
                <p>Quick and secure shipping nationwide</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
  );
};

export default About;
