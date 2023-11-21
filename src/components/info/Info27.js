import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info27 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Kansalaisten näkemysten kuuluminen mediajulkisuudessa on olennaista demokraattisen kansalaisyhteiskunnan toimivuuden näkökulmasta. Muuttunut mediaympäristö tuo haasteita julkiselle keskustelulle ja kansalaisten viestinnällisille oikeuksille (Reunanen & Herkman 2020). Yleisöt ovat eriytyneet, ja heikentynyt luottamus mediaan,  erityisesti uutismediaan on ajanut kansalaisia vaihtoehtoisten tietolähteiden pariin. Luottamuksen puute liittyy usein kokemukseen siitä, etteivät erilaiset näkemykset ja tiedonlähteet tule mediajulkisuudessa edustetuiksi (Ojala & Matikainen 2022; Mäkinen &Pienimäki 2023).​​",
        ]}
        content={[
          "Miten kansalaisten erilaiset näkemykset esiintyvät jutussasi? Voitko osallistaa yleisöä juttuprosessin eri vaiheisiin? Miten yleisön kontribuutio voisi olla hyödyksi työssäsi?​​​",
        ]}
        // bulletpoints={[
        //   "Kun lähdet tekemään juttua polarisoivasta aiheesta, on tärkeää pyytää esimieheltä riittävästi aikaa jutun suunnitteluun ja toteuttamiseen.​",
        // ]}
        readmore={[
          {
            value:
              "Dialogisuudesta ja sen hyödyistä​​",
            navigate: "https://yle.fi/aihe/artikkeli/2018/10/24/sami-koivisto-jutut-ovat-parempia-jos-toimittaja-mieltaa-ne-osaksi-dialogia",
          },
          {
            value:
              "Vaihtoehtoisista äänistä journalistisessa mediassa COVID-19-pandemia aikana​",
            navigate: "https://journal.fi/mediaviestinta/article/view/137062/85213",
          },
          {
            value:
              "Miten minä ja sinä voivat kohdata journalistisessa dialogeissa?​​",
            navigate: "https://sites.tuni.fi/uploads/2022/04/da182c72-taneli-heikka-002.pdf",
          },
          {
            value:
              "Reilut mediasisällöt kansalaisyhteiskuntaa yhdistämässä​",
            navigate: "https://kansalaisyhteiskunta.fi/reilut-mediasisallot-kansalaisyhteiskuntaa-yhdistamassa/",
          },
          // {
          //   value:
          //     "Inklusiivisen mediajulkisuuden haasteista ja mahdollisuuksista. Mäkinen, M. & Pienimäki, M.​",
          //   navigate: "",
          // },
        ]}
      />
    </div>
  );
};
