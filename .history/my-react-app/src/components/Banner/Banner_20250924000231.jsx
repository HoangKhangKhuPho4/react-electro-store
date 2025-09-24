// DEMO BANNER COMPONENT
const Banner = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
      margin: '20px 0',
      borderRadius: '10px'
    }}>
      <h1>🎯 BANNER COMPONENT</h1>
      <p>Tôi là Banner - được render từ Home.jsx</p>
      <p>React đã tự động đưa tôi vào chỗ {'{children}'}</p>
    </div>
  );
};

export default Banner;