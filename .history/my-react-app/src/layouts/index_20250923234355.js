/**
 * LAYOUTS INDEX
 * 
 * Import layouts từ file này để đảm bảo consistency
 * 
 * Usage:
 * import { MainLayout } from '../layouts';
 * 
 * TEAM RULES:
 * 1. LUÔN dùng MainLayout cho các trang standard
 * 2. KHÔNG import trực tiếp ./MainLayout 
 * 3. Nếu cần layout mới, tạo trong folder này và export ở đây
 */

export { default as MainLayout } from './MainLayout';

// Future layouts có thể thêm vào đây:
// export { default as AuthLayout } from './AuthLayout';
// export { default as AdminLayout } from './AdminLayout';
// export { default as CheckoutLayout } from './CheckoutLayout';