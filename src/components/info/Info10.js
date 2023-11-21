import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info10 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Eri alojen tutkimustietokannat ja e-aineistot tarjoavat kotimaisia ja kansainvälisiä tutkimuslähteitä. Yliopistojen ja tutkimuslaitosten tutkimusportaalien kautta löydät tutkijoita, julkaisuja, projekteja ja tutkimusyksiköitä.​",
        ]}
        content={[
          "Tunnetko jo parhaat tutkimustietokannat tiedonhakuun? Voisitko löytää aiheeseen myös vähemmän tunnettua tutkimustietoa? Oletko huomioinut mahdolliset kiistanalaiset tutkimustulokset?​​​​​",
          "Reiluja vinkkejä monipuoliseen tiedonhakuun:​​​",
        ]}
        bulletpoints={[
          "Hyödynnä tutkimustietojärjestelmiä ja hakupalveluita, kuten  ResearchGate, AcademiaEdu -tutkijayhteisöpalvelu ja Google Scholar –hakupalvelu​",
          "Tieteellisen julkaisun löytämisessä voit käyttää näppäränä apuna tekoälypohjaista SciSpace-sivustoa: https://typeset.io",
          "Käytä vähemmän tunnettuja asiantuntijoita, joita ei ole totuttu näkemään valtavirtamediassa.​​",
          "Vältä viittaamasta tutkimustiedon konsensukseen ilman asian varmistamista.​​",
          "Yhdistykset ja eri alojen järjestöt voivat olla arvokas apu näkökulmien monipuolistamisessa ja sopivien haastateltavien löytämisessä.​",
        ]}
        readmore={[
          {
            value:
              "Vaihtoehtoisista äänistä journalistisessa mediassa COVID-19-pandemia aikana",
            navigate: "https://journal.fi/mediaviestinta/article/view/137062/85213",
          },
        ]}
        next={"study/12"}
      />
    </div>
  );
};
