import type { NextPage } from "next";
import { useEffect } from "react";

import Layout from "@components/organisms/layout";
import MainBanner from "@organisms/mainBanner";
import FeatureStepTransaction from "@organisms/featureStepTransaction";
import FeaturedGames from "@organisms/featuredGames";
import Reached from "@organisms/reached";
import Story from "@organisms/story";

const Home: NextPage = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        once: true,
        duration: 800,
        easing: "ease-in-out",
      });
    });
  }, []);

  return (
    <Layout pageTitle="Home">
      {/* Hero */}
      <MainBanner />

      {/* Step Transaction */}
      <FeatureStepTransaction />

      {/* Featured Games */}
      <FeaturedGames />

      {/* Reached */}
      <Reached />

      {/* Story */}
      <Story
        reverse
        title1nd="Win The Battle."
        title2nd="Be The Champion."
        image="/img/Header-9.png"
        text="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        action="/about"
      />
    </Layout>
  );
};

export default Home;    </Layout>
  );
};

export default Home;          action="/about"
        />
      </Layout>
    </>
  );
};

export default Home;
