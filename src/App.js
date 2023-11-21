import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Landing } from "./components/Landing";
import { Tietopankkiin } from "./components/tietopankkiin/Tietopankkiin";

import { Study4 } from "./components/questions/Study4";
import { Study5 } from "./components/questions/Study5";
import { Study8 } from "./components/questions/Study8";
import { Study12 } from "./components/questions/Study12";
import { Study16 } from "./components/questions/Study16";
import { Study19 } from "./components/questions/Study19";

import { Info6} from "./components/info/Info6";
import { Info7} from "./components/info/Info7";
import { Info9} from "./components/info/Info9";
import { Info10} from "./components/info/Info10";
import { Info11} from "./components/info/Info11";
import { Info13} from "./components/info/Info13";
import { Info14} from "./components/info/Info14";
import { Info15} from "./components/info/Info15";
import { Info17} from "./components/info/Info17";
import { Info18} from "./components/info/Info18";
import { Info20} from "./components/info/Info20";
import { Info21} from "./components/info/Info21";
import { Info22} from "./components/info/Info22";
import { Info23} from "./components/info/Info23";

import { Info25} from "./components/info/Info25";
import { Info26} from "./components/info/Info26";
import { Info27} from "./components/info/Info27";
import { Info28} from "./components/info/Info28";
import { Info29} from "./components/info/Info29";
import { Info30} from "./components/info/Info30";
import { Info31} from "./components/info/Info31";
import { Info32} from "./components/info/Info32";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/navigator/" element={<Landing />} />
        <Route exact path="/dashboard/" element={<Tietopankkiin />} />

        <Route path="/navigator/study/4" element={<Study4 />} />
        <Route path="/navigator/study/5" element={<Study5 />} />
        <Route path="/navigator/study/8" element={<Study8 />} />
        <Route path="/navigator/study/12" element={<Study12 />} />
        <Route path="/navigator/study/16" element={<Study16 />} />
        <Route path="/navigator/study/19" element={<Study19 />} />

        <Route path="/navigator/info/6" element={<Info6 />} />
        <Route path="/navigator/info/7" element={<Info7 />} />
        <Route path="/navigator/info/9" element={<Info9 />} />
        <Route path="/navigator/info/10" element={<Info10 />} />
        <Route path="/navigator/info/11" element={<Info11 />} />
        <Route path="/navigator/info/13" element={<Info13 />} />
        <Route path="/navigator/info/14" element={<Info14 />} />
        <Route path="/navigator/info/15" element={<Info15 />} />
        <Route path="/navigator/info/17" element={<Info17 />} />
        <Route path="/navigator/info/18" element={<Info18 />} />
        <Route path="/navigator/info/20" element={<Info20 />} />
        <Route path="/navigator/info/21" element={<Info21 />} />
        <Route path="/navigator/info/22" element={<Info22 />} />
        <Route path="/navigator/info/23" element={<Info23 />} />
        
        <Route path="/navigator/info/25" element={<Info25 />} />
        <Route path="/navigator/info/26" element={<Info26 />} />
        <Route path="/navigator/info/27" element={<Info27 />} />
        <Route path="/navigator/info/28" element={<Info28 />} />
        <Route path="/navigator/info/29" element={<Info29 />} />
        <Route path="/navigator/info/30" element={<Info30 />} />
        <Route path="/navigator/info/31" element={<Info31 />} />
        <Route path="/navigator/info/32" element={<Info32 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
