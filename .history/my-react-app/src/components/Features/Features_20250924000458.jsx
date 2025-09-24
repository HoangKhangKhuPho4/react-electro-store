// DEMO FEATURES COMPONENT
const Features = () => {
  return (
    <div
      style={{
        background: "#f8f9fa",
        padding: "40px 20px",
        textAlign: "center",
        margin: "20px 0",
        border: "2px dashed #6c757d",
        borderRadius: "10px",
      }}
    >
      <h2>⭐ FEATURES COMPONENT</h2>
      <p>Tôi là Features - cũng được render từ Home.jsx</p>
      <p>React đã tự động đưa tôi vào cùng chỗ {"{children}"} với Banner</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{ padding: "10px", background: "white", borderRadius: "5px" }}
        >
          Feature 1
        </div>
        <div
          style={{ padding: "10px", background: "white", borderRadius: "5px" }}
        >
          Feature 2
        </div>
        <div
          style={{ padding: "10px", background: "white", borderRadius: "5px" }}
        >
          Feature 3
        </div>
      </div>
    </div>
  );
};

export default Features;
