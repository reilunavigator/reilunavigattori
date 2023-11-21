import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info29 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Journalistien eettisiä ohjeita valvoo Julkisen sanan neuvosto. Neuvoston tehtävänä on tulkita hyvää journalistista tapaa ja puolustaa sanan- ja julkaisemisen vapautta. Neuvoston asettamien journalistin ohjeiden mukaan jokaisen ihmisarvoa on kunnioitettava, eikä vähemmistöjä pidä esittää alentavasti tai halveksuvassa valossa (JSN 2023).​​​",
          "Journalistin ohjeet käsittelevät ammatillista asemaa, tietojen hankkimista ja julkaisemista, haastateltavan ja haastattelijan oikeuksia, virheiden korjausta ja omia kannanottoja sekä yksityisen ja julkisen määrittelyä. Ohjeet sisältävät 35 eri kohtaa ja liitteen koskien yleisön tuottamaa aineistoa tiedotusvälineiden verkkosivuilla.​",
        ]}
        content={[
          "Miten tarkasti seuraat journalistin eettisiä ohjeita? Oletko tietoinen esimerkiksi haastateltavan oikeuksista ja tietojen hankkimisen periaatteista? Mitä haittaa ohjeiden noudattamatta jättämisestä voi seurata?​",
        ]}
        // bulletpoints={[
        //   "Kun lähdet tekemään juttua polarisoivasta aiheesta, on tärkeää pyytää esimieheltä riittävästi aikaa jutun suunnitteluun ja toteuttamiseen.​",
        // ]}
        readmore={[
          {
            value:
              "Journalistin ohjeet​",
            navigate: "https://jsn.fi/journalistin-ohjeet/",
          },
          {
            value:
              "Journalistin notkuvat rajat –hankkeen tulokset​​",
            navigate: "https://blogs.helsinki.fi/journalismin-notkuvat-rajat/2022/12/22/tutkimusartikkeleita-avoimesti-luettavissa-journalistica-ja-journalism-lehdista/",
          },
        ]}
      />
    </div>
  );
};
