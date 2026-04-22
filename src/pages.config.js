import AIAutomation from './pages/AIAutomation';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import UIUXDesign from './pages/UIUXDesign';
import VideoProduction from './pages/VideoProduction';
import WebDesign from './pages/WebDesign';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIAutomation": AIAutomation,
    "Contact": Contact,
    "GraphicDesign": GraphicDesign,
    "Home": Home,
    "Podcast": Podcast,
    "ProjectDetail": ProjectDetail,
    "Resume": Resume,
    "UIUXDesign": UIUXDesign,
    "VideoProduction": VideoProduction,
    "WebDesign": WebDesign,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
