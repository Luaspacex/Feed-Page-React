import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import AuthorizationPage from "./pages/AuthorizationPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage/PostPage";
import PostCreator from "./pages/PostCreator/PostCreator"
import SettingPage from "./pages/SettingPage/SettingsPage"
function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/*" element={<AuthorizationPage />} />
            <Route
              path="/registration"
              element={<AuthorizationPage variant="registration" />}
            />
          </>
        )}
        {user && (
          <Route path="/*" element={<MainLayout />}>
            <Route index element={<FeedPage />} />
          </Route>
        )}
        {user && (
          <Route path="/posts/:id" element={<MainLayout />}>
            <Route index element={<PostPage />} />
          </Route>
        )}
         {user && (
          <Route path="/posts/createPosts" element={<MainLayout />}>
            <Route index element={<PostCreator />} />
          </Route>
        )}
         {user && (
          <Route path="/user/settings" element={<MainLayout />}>
            <Route index element={<SettingPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
