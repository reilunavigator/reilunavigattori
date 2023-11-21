import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info11 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Aihe koskettaa yleensä joitakin ihmisiä tai ihmisryhmiä, joita on syytä lähestyä. He ovat parhaita asiantuntijoita, joiden näkemyksiä ei tulisi sivuuttaa.​​",
        ]}
        content={[
          "Miten voit tuoda esiin asianosaisten näkemykset ja kokemukset? Tunnetko jo sopivia haastateltavia tai oletko mukana verkostoissa, joita voit hyödyntää?​​​​​",
          "Reiluja vinkkejä asianosaisten näkökulmien esittämiseksi:​​​​​​",
        ]}
        bulletpoints={[
          "Haastattele henkilöitä, joihin asia vaikuttaa. Tuo esiin heidän näkemyksensä ja kokemuksensa niitä kunnioittaen.​​​​​",
          "Yhdistysten ja järjestöjen kautta voi löytää asiaan perehtyneitä henkilöitä ja haastateltavia.  Myös projektit ja hankkeet voivat olla hyvä linkki aiheeseen ja asianosaisiin.​​​​​",
          "Sosiaalinen media voi olla apuna aiheen kartoittamisessa ja kokemusten kuuntelemisessa.​​",
          "Koostakaa työyhteisössäsi yhteinen lähdepankki, joka toimii apuna lähteiden ja haastateltavien löytämisessä.​​​​​​",
        ]}
        readmore={[
          {
            value: "Kuinka kertoa siirtolaistaustaisista romaneista? Opas tarjoaa vinkkejä, toimivia menetelmiä ja voi auttaa tunnistamaan riskejä myös muiden vähemmistöjen käsittelyssä.​",
            navigate: "https://www.hdl.fi/ita-euroopan-romanit-opas-journalisteille/",
          },
        ]}
        next={"study/12"}
      />
    </div>
  );
};
