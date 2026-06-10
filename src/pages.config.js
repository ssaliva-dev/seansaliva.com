import AIAutomation from './pages/AIAutomation';
import AIEngineering from './pages/AIEngineering';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import GitHubProjects from './pages/GitHubProjects';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import VideoProduction from './pages/VideoProduction';
import WebDesign from './pages/WebDesign';
import __Layout from './Layout.jsx';
import { PAGE_PATHS } from './pagePaths';


export const PAGES = {
    "AIAutomation": AIAutomation,
    "AIEngineering": AIEngineering,
    "Contact": Contact,
    "GraphicDesign": GraphicDesign,
    "GitHubProjects": GitHubProjects,
    "Home": Home,
    "Podcast": Podcast,
    "ProjectDetail": ProjectDetail,
    "Resume": Resume,
    "VideoProduction": VideoProduction,
    "WebDesign": WebDesign,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
    routes: PAGE_PATHS,
};
