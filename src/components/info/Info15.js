import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info15 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Journalistin velvollisuus on pyrkiä totuudenmukaiseen tiedonvälitykseen, ja tiedot on tarkistettava mahdollisimman hyvin – myös silloin kun ne on aikaisemmin julkaistu. Tietolähteisiin on suhtauduttava kriittisesti. Erityisen tärkeää se on kiistanalaisissa asioissa (JSN 2014). Totuuden löytäminen voi kuitenkin jäädä vajaaksi, vaikka yksittäisten tietojen paikkansapitävyyden varmistamisessa onnistuttaisiinkin (Kuutti 2015). Tämä vaatii tasapainoilua tietojen varmistamisen ja nopean julkaisemisen synnyttämien ristiriitaisten paineiden keskellä.​",
        ]}
        content={[
          "Ovatko juttusi tarjoamat tiedot läpinäkyviä ja myös yleisön tarkistettavissa? Miten varmistat tietolähteesi luotettavuuden?​",
          "Reiluja vinkkejä tietojen tarkistukseen:​​",
        ]}
        bulletpoints={[
          "Suhtaudu kriittisesti kaikkiin tietolähteisiin. Tarkista myös auktorisoitujen ja virallisten tietolähteiden tarjoamia tietoja.​​",
          "Ota huomioon tietolähteiden taloudelliset ja poliittiset vaikutteet.​​​",
          "Varo viittaamasta tutkimustiedon yleiseen konsensukseen, jos et ole varma tutkijoiden yksimielisyydestä. Tieto voi myös muuttua ajassa. Pohdi voivatko vaihtoehtoiset tutkimustulokset olla mukana tietojen arvioimisessa.​​",
        ]}
        readmore={[
          {
            value:
              "Ylen faktantarkistuksen tarkistuksesta​​",
            navigate:
              "https://journal.fi/mediaviestinta/article/view/88452",
          },
        ]}
        next={"study/16"}
      />
    </div>
  );
};
