import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanBoard from "./pages/KanbanBoard";
import ThemeSettings from "./pages/ThemeSettings";
import DataTable from "./pages/DataTable";
import { lightTheme, darkTheme } from "./theme/themes";
import useCustomTheme from "./hooks/useCustomTheme";

const App = () => {
  const { themeMode, toggleTheme } = useCustomTheme();
  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <DashboardLayout toggleTheme={toggleTheme} themeMode={themeMode}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/settings" element={<ThemeSettings />} />
            <Route path="/data-table" element={<DataTable />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;