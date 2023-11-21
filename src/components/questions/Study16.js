import { Question } from "./components/Question.js";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study16 = () => {
  return (
    <div className="questions">
      <QuestionNavbar />
      <Question
        title={
          "Kun juttu julkaistaan, miten aiot seurata aihetta ja saamiasi kommentteja?​​​"
        }
        options={[
          {
            value: "Seuraan aiheen kehittymistä ja jutusta saamiani kommentteja.​​",
            navigate: "info/17",
          },
          {
            value: "En ehdi seurata kommentteja tai keskustella aiheesta.​​​​​",
            navigate: "info/18",
          },
        ]}
      />
    </div>
  );
};
