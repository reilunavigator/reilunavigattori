import { Question } from "./components/Question.js";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study5 = () => {
  return (
    <div className="questions">
      <QuestionNavbar />
      <Question
        title={
          "Hienoa, että otat tehtävän vastaan! Aika valita näkökulma.​\nMinkä näkökulman valitset jutun lähtökohdaksi?​"
        }
        options={[
          { value: "Aiheeseen liittyen on mahdollista tuoda esiin monenlaisia näkökulmia.​", navigate: "info/6" },
          { value: "Haluan  huomioida näkökulman tai kohderyhmän, jota ei ole vielä tuotu esiin valtamediassa.​", navigate: "info/7" },
        ]}
      />
    </div>
  );
};
