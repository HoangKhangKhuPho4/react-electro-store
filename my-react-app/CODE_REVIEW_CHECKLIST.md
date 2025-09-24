# CODE REVIEW CHECKLIST - LAYOUT SYSTEM

## ✅ **Layout Usage Check**

### Page Structure:

- [ ] Page sử dụng `import { MainLayout } from '../layouts'`?
- [ ] Page KHÔNG import trực tiếp Header/Navigation/Footer?
- [ ] Page content được wrap trong `<MainLayout>`?
- [ ] Page KHÔNG có manual Header/Footer placement?

### Code Quality:

- [ ] Component có JSDoc comment mô tả purpose?
- [ ] Import statements được organize đúng thứ tự?
- [ ] KHÔNG có unused imports?
- [ ] KHÔNG có hardcoded styles (sử dụng CSS classes)?

### Example GOOD Code:

```jsx
/**
 * SHOP PAGE
 * Purpose description here...
 */
import { MainLayout } from "../layouts";
import ProductList from "../components/ProductList";

const Shop = () => (
  <MainLayout>
    <ProductList />
  </MainLayout>
);
```

### Example BAD Code:

```jsx
// ❌ Missing documentation
// ❌ Direct imports
import Header from "../components/Header";
import Footer from "../components/Footer";

const Shop = () => (
  <div>
    <Header /> {/* ❌ Manual layout */}
    <ProductList />
    <Footer /> {/* ❌ Manual layout */}
  </div>
);
```

## 🚫 **Common Mistakes to Reject**

1. **Manual Layout Assembly**

   ```jsx
   // ❌ REJECT
   <Header />
   <Navigation />
   <Content />
   <Footer />
   ```

2. **Direct MainLayout Import**

   ```jsx
   // ❌ REJECT
   import MainLayout from "../layouts/MainLayout";
   ```

3. **Missing Documentation**

   ```jsx
   // ❌ REJECT - No component description
   const Shop = () => { ... }
   ```

4. **Inconsistent Structure**
   ```jsx
   // ❌ REJECT - Different structure per page
   Page A: Header → Nav → Content → Footer
   Page B: Nav → Header → Content
   Page C: Header → Content → Footer
   ```

## ✅ **Approval Criteria**

✅ **APPROVE** only if:

- Uses MainLayout correctly
- Follows import conventions
- Has proper documentation
- No manual layout assembly
- Consistent with team standards

## 📞 **Questions During Review?**

Ask developer to:

1. Explain why they didn't use MainLayout (if applicable)
2. Demonstrate layout consistency across pages
3. Show understanding of team conventions
