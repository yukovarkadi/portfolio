import {
  Header,
  Footer,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
  OurClients,
  Contact,
  ScrollToTop,
  ThemeToggle,
} from "./components/index";

Header;

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetInTouch />
        <OurClients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}

export default App;
