import { Toaster } from "@/components/ui/toaster"
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

const { Pages, Layout, routes } = pagesConfig;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;


function App() {

  return (
    <>
      <Router>
        <Routes>
          {Object.entries(Pages).map(([pageName, Page]) => (
            <Route
              key={pageName}
              path={routes?.[pageName] ?? `/${pageName}`}
              element={
                <LayoutWrapper currentPageName={pageName}>
                  <Page />
                </LayoutWrapper>
              }
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
