import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info32 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Viranomaisten auktorisoimat tutkimuslaitokset ja instituutiot ovat monesti ensimmäinen ja selkein tarttumakohta lähteisiin. Usein media suosii vakiintuneita asiantuntijalähteitä ja viranomaislausuntoja.​",
        ]}
        content={[
          "Eri alojen tutkimustietokannat ja e-aineistot tarjoavat kotimaisia ja kansainvälisiä tutkimuslähteitä. Yliopistojen ja tutkimuslaitosten tutkimusportaalien kautta löydät tutkijoita, julkaisuja, projekteja ja tutkimusyksiköitä.​",
          "Yhdistykset ja eri alojen järjestöt voivat olla arvokas apu näkökulmien monipuolistamisessa ja sopivien haastateltavien löytämisessä. Yhdistysten ja järjestöjen kautta voi löytää asiaan perehtyneitä henkilöitä ja haastateltavia.  Sosiaalinen media voi olla apuna aiheen kartoittamisessa ja kokemusten kuuntelemisessa.​​",
          "Voisitko haastatella henkilöitä, joihin asia vaikuttaa?  Miten tavoittaa nämä henkilöt?​​​",
        ]}
        // bulletpoints={[
        //   "Ota huomioon missä asiayhteydessä juttu julkaistaan​",
        // ]}
        readmore={[
          {
            value:
              "Vaihtoehtoisista äänistä journalistisessa mediassa COVID-19-pandemian aikana​​",
            navigate: "https://journal.fi/mediaviestinta/article/view/137062/85213",
          },
          {
            value:
              "Sopiva ry:n ja Diakonissalaitoksen tuottama opas romanisiirtolaisten journalistisesta kohtelusta voi tarjota toimivia menetelmiä ja auttaa tunnistamaan riskejä myös muiden vähemmistöjen käsittelyssä​",
            navigate: "https://www.hdl.fi/ita-euroopan-romanit-opas-journalisteille/",
          },
          {
            value:
              "Miten mediajulkisuus kietoutuu suomalaiseen vallankäyttöön​",
            navigate: "https://trepo.tuni.fi/handle/10024/65414",
          },
          {
            value:
              "DECA-hankkeen tutkimuksista yhteiskunnan tiedollisista järjestelmistä, käytänteistä ja ongelmista useista eri näkökulmista​",
            navigate: "https://www.decatutkimus.fi/",
          },
        ]}
      />
    </div>
  );
};
