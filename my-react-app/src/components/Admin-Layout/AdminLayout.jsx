import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 80;

const AdminLayout = ({ children, currentPage = "Dashboard" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const drawerWidth = sidebarCollapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Header Component */}
      <AdminHeader
        currentPage={currentPage}
        onDrawerToggle={handleDrawerToggle}
        onSidebarToggle={handleSidebarToggle}
        sidebarCollapsed={sidebarCollapsed}
      />

      {/* Sidebar Drawer Container */}
      <Box
        component="nav"
        sx={{
          width: { xs: 0, md: drawerWidth },
          flexShrink: 0,
          transition: "width 0.3s ease",
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              zIndex: (theme) => theme.zIndex.appBar - 1,
            },
          }}
        >
          <AdminSidebar currentPage={currentPage} collapsed={false} />
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "fixed",
              height: "100vh",
              zIndex: (theme) => theme.zIndex.appBar - 1,
              transition: "width 0.3s ease",
              overflowX: "hidden",
            },
          }}
          open
        >
          <AdminSidebar
            currentPage={currentPage}
            collapsed={sidebarCollapsed}
          />
        </Drawer>
      </Box>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
          mt: "64px",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#f8f9fa",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
