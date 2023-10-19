import Header from "./components/Header";
import Maincon from "./components/Maincon";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

export default function App() {
  return (
    <html>
      <Header />
      <main>
        <Maincon />
        <Aside />
      </main>
      <Footer />
    </html>
  );
}