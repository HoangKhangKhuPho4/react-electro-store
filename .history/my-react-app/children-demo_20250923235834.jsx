// DEMO: Hiểu cách children hoạt động

// 1. Component cha (Layout)
const SimpleLayout = ({ children }) => {
  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h1>🏠 LAYOUT HEADER (cố định)</h1>
      
      <div style={{ border: '2px solid blue', padding: '10px', margin: '10px 0' }}>
        {/* 
          ⬇️ CHILDREN SẼ XUẤT HIỆN Ở ĐÂY ⬇️
          React sẽ tự động thay thế {children} 
          bằng những gì được truyền vào từ component con
        */}
        {children}
      </div>
      
      <h1>🦶 LAYOUT FOOTER (cố định)</h1>
    </div>
  );
};

// 2. Component con sử dụng Layout
const HomePage = () => {
  return (
    <SimpleLayout>
      {/* 
        ⬇️ NHỮNG DÒNG NÀY SẼ TRỞ THÀNH CHILDREN ⬇️
        React sẽ lấy tất cả nội dung bên trong <SimpleLayout>
        và đưa vào chỗ {children} ở trên
      */}
      <h2>🎯 HOME PAGE CONTENT</h2>
      <p>Đây là nội dung riêng của trang Home</p>
      <button>Home Button</button>
    </SimpleLayout>
  );
};

// 3. Component con khác sử dụng cùng Layout
const ShopPage = () => {
  return (
    <SimpleLayout>
      {/* 
        ⬇️ NHỮNG DÒNG NÀY SẼ TRỞ THÀNH CHILDREN KHÁC ⬇️
        Cùng Layout nhưng children khác hoàn toàn
      */}
      <h2>🛒 SHOP PAGE CONTENT</h2>
      <p>Đây là nội dung riêng của trang Shop</p>
      <div>Product 1 | Product 2 | Product 3</div>
    </SimpleLayout>
  );
};

// 4. KẾT QUẢ RENDER:

// HomePage sẽ render thành:
// <div style="border: 2px solid red">
//   <h1>🏠 LAYOUT HEADER</h1>
//   <div style="border: 2px solid blue">
//     <h2>🎯 HOME PAGE CONTENT</h2>      ← children từ HomePage
//     <p>Đây là nội dung riêng...</p>     ← children từ HomePage  
//     <button>Home Button</button>        ← children từ HomePage
//   </div>
//   <h1>🦶 LAYOUT FOOTER</h1>
// </div>

// ShopPage sẽ render thành:
// <div style="border: 2px solid red">
//   <h1>🏠 LAYOUT HEADER</h1>
//   <div style="border: 2px solid blue">
//     <h2>🛒 SHOP PAGE CONTENT</h2>       ← children từ ShopPage
//     <p>Đây là nội dung riêng...</p>     ← children từ ShopPage
//     <div>Product 1 | Product 2...</div> ← children từ ShopPage
//   </div>
//   <h1>🦶 LAYOUT FOOTER</h1>
// </div>

export { SimpleLayout, HomePage, ShopPage };