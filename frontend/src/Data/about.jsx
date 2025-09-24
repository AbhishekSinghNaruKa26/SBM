import sbmlogo from "../../public/IMAGES/SMB-LOGO.png";
import allsbm from "../../public/IMAGES/allsbm.png";
import mission from "../../public/IMAGES/spices maslaa/about-mission.svg";
import vission from "../../public/IMAGES/spices maslaa/about-vission.svg";
const aboutUs = [
  {
    src: sbmlogo,
    head: "Who we are?",
    contant1: (
      <>
        At <b>SBM</b>, we believe that true wellness comes from the purity of
        what we consume. Our journey began with a simple vision—to make premium
        quality Kashmiri-Lalchili,Natural Dhaniya Powder,Natural Haldi
        Powder,Natural Kalimirch, flavorful spices, and authentic Rajasthani
        specialties easily accessible to every household.
      </>
    ),
    contant2: (
      <>
        More than just a food brand, SBM stands for{" "}
        <b>purity, authenticity, and trust.</b> Every pack carries our legacy of
        quality and a promise to deliver natural goodness that brings health,
        joy, and tradition to your home.
      </>
    ),
  },
];
const allSbm = [
  {
    src: allsbm,
    head: "More Than Flavors, A Legacy",
    contant1:
      "SBM is more than a brand—it’s a commitment to bringing you nutrition, authenticity, and the flavors of heritage, sealed fresh in every pack.",
  },
];
const mv = [
  {
    src: mission,
    head: "Our Mission",
    contant:
      "To make high-quality, hygienically packed dry fruits, snacks, and traditional delicacies accessible to every family, supporting both healthier living and authentic flavors.",
  },
  {
    src: vission,
    head: "Our Vission",
    contant:
      "To become India’s most trusted brand for premium snacking and traditional specialties—blending heritage with innovation.",
  },
];
export { aboutUs, allSbm, mv };
