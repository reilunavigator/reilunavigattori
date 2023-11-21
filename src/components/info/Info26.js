import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info26 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Suomessa sananvapaus on turvattu perustuslaissa sekä Euroopan ihmisoikeussopimuksessa. YK:n​ Ihmisoikeuksien yleismaailmallisen julistuksen 19. artiklan mukaan jokaisella on oikeus mielipiteen- ja sananvapauteen, johon sisältyy oikeus häiritsemättä pitää mielipiteensä sekä oikeus rajoista riippumatta hankkia, vastaanottaa ja levittää tietoja tiedotusvälineiden kautta. Sananvapauden puolustaminen kuuluu journalismin yhteiskunnallisiin tehtäviin.​",
        ]}
        content={[
          "Koetko olevasi sananvapauden puolustaja? Kenen sananvapautta haluat puolustaa? Miten sananvapaus ja vastuu suhtautuvat toisiinsa?​​​",
        ]}
        // bulletpoints={[
        //   "Kun lähdet tekemään juttua polarisoivasta aiheesta, on tärkeää pyytää esimieheltä riittävästi aikaa jutun suunnitteluun ja toteuttamiseen.​",
        // ]}
        readmore={[
          {
            value:
              "Journalistiliiton sivuilta sananvapaudesta ja – vastuusta​",
            navigate: "https://journalistiliitto.fi/fi/pelisaannot/sananvapaus/",
          },
          {
            value:
              "Mielipiteestä ja sananvapaudesta​",
            navigate: "https://ihmisoikeudet.net/ihmisoikeudet/kansalais-ja-poliittiset-oikeudet/mielipiteen-ja-sananvapaus/",
          },
          {
            value:
              "Amnestyn sivuilta sananvapaudesta​",
            navigate: "https://www.amnesty.fi/mita-amnesty-tekee/sananvapaus/",
          },
        ]}
      />
    </div>
  );
};