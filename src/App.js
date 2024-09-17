import styles from "./style";

import Navbar from "./componets/navbar";
import Hero from "./componets/Hero";
import Stats from "./componets/stats";
import Analytics from "./about";
import Footer from "./componets/footer";
import CTA from "./cta";
import Clients from "./componets/brands";
import Banner from "./b1";
function App() {
  return (

<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
<Stats />
<Banner />
<Analytics />
<Clients />
<CTA />
<Footer />

</div>
</div>
</div>
  );
}

export default App;
