import Header from "./components/Header";
import Maincon from "./components/Maincon";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Maincon />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}