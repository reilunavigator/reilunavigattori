import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info28 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Suomalaisilla on keskimäärin korkea luottamus uutismediaan, mutta kritiikkiä on osoitettu tiedonvälityksen ristiriitaisuuksiin ja kansalaisten mielipiteiden vähäiseen huomioimiseen.​",
        ]}
        content={[
          "Miten tärkeää yleisön luottamus on sinulle? Pitääkö luottamus saavuttaa myös jutun kohteeseen? Oletko toiminut sinulle osoitetun luottamuksen arvoisesti? Miten luottamus menetetään ja mitä siitä voi seurata?​​​​​",
        ]}
        // bulletpoints={[
        //   "Kun lähdet tekemään juttua polarisoivasta aiheesta, on tärkeää pyytää esimieheltä riittävästi aikaa jutun suunnitteluun ja toteuttamiseen.​",
        // ]}
        readmore={[
          {
            value:
              "Suomalaisten luottamuksesta uutismediaan​​",
            navigate: "https://journal.fi/mediaviestinta/article/view/115653",
          },
          {
            value:
              "Suomalaisten luottamuksesta uutismediaan Reuters-instituutin Digital News Report -kyselyaineiston pohjalta​",
            navigate: "https://journal.fi/mediaviestinta/article/view/125625",
          },
          {
            value:
              "What does social responcibility mean in journalism? (Kesto: 1:26:32)​​",
            navigate: "https://sites.tuni.fi/nordicforum/news/nordic-forum-dialogue-what-does-social-responsibility-mean-in-journalism/",
          },
        ]}
      />
    </div>
  );
};
