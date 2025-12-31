import type { NextPage } from "next";

// layout
import Layout from "@components/organisms/layout";

// organisms
import MainBanner from "@components/organisms/mainBanner";
import FeatureStepTransaction from "@components/organisms/featureStepTransaction";
import FeaturedGames from "@components/organisms/featuredGames";
import Reached from "@components/organisms/reached";
import Story from "@components/organisms/story";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      {/* Hero / Banner */}
      <MainBanner />

      {/* Step Transaction */}
      <FeatureStepTransaction />

      {/* Featured Games */}
      <FeaturedGames />

      {/* Reached Section */}
      <Reached />

      {/* Story Section */}
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

export default Home;          action="/about"
        />
      </Layout>
    </>
  );
};

export default Home;
