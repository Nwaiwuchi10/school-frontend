import { Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Head from "./Components/Head";
import Header from "./Components/Header";
import { Route } from "react-router-dom";
import HomPage from "./HomePage/HomPage";

import Footer from "./Components/Footer";

import Reg from "./Screens/Reg";
import JSS1A from "./Screens/JSS1A";
import StudentsLoginScreen from "./Screens/StudentsLoginScreen";
import StudentSignup from "./Screens/StudentSignup";
import TeacherLogin from "./Screens/TeacherLogin";
import TeacherSignup from "./Screens/TeacherSignup";
import CheckResult from "./Screens/CheckResult";

import Jss1Aresultlist from "./Screens/Jss1Aresultlist";
// import Jss1result2 from "./Screens/Jss1result2";
import AdmissionPortal from "./Screens/AdmissionPortal";

import Createjss1results from "./Screens/Createjss1results";
import GetResults from "./Screens/GetResults";
import Ss1resultlist from "./Screens/SS1Screen/Ss1resultlist";
import Ss1studentResult from "./Screens/SS1Screen/Ss1studentResult";
import Adminresultclasslist from "./Screens/Adminresultclasslist";
import CreateResultList from "./Screens/CreateResultList";

import Jss1resultby2ndterm from "./Screens/jss1result2ndterm/Jss1resultby2ndterm";
import Jss1resultby3rdterm from "./Screens/jss1result2ndterm/Jss1resultby3rdterm";
import Result2ndterm2022 from "./Screens/jss1result2ndterm/Result2ndterm2022";
import Result2ndterm2021 from "./Screens/jss1result2ndterm/Result2ndterm2021";
import Resultdetails2022 from "./Screens/jss1result2ndterm/Resultdetails2022";
import Result1stterm2021 from "./Screens/firstTermjss1/Result1stterm2021";
import Outline from "./Pages/Outline";
import Createresult2ndterm from "./Screens/Createresult2ndterm";
import Signresult from "./Screens/Signresult";
import { Example } from "./PDF/Example";

function App() {
  return (
    <div>
      <Head />
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomPage />} />
            <Route path="/registernumber" element={<Reg />} />
            <Route path="/login" element={<StudentsLoginScreen />} />
            <Route path="/teacherslogin" element={<TeacherLogin />} />
            <Route path="/teachersignup" element={<TeacherSignup />} />
            <Route path="/signup" element={<StudentSignup />} />
            <Route path="/JSS1A" element={<JSS1A />} />
            <Route path="/checkresult" element={<CheckResult />} />
            {/* <Route path="/jss1results/:id" element={<Jss1result2 />} /> */}
            <Route path="/jss1results/:id" element={<Example />} />

            <Route path="/JSS1resultlist" element={<Jss1Aresultlist />} />
            <Route path="/admissionportal" element={<AdmissionPortal />} />
            <Route
              path="/admin/jss1results1stterm"
              element={<Createjss1results />}
            />
            <Route path="/getclasslist" element={<Adminresultclasslist />} />
            <Route path="/getresult" element={<GetResults />} />
            <Route path="/upload" element={<CreateResultList />} />
            <Route path="/SS1" element={<Ss1resultlist />} />
            <Route
              path="/jss1result2ndterm"
              element={<Jss1resultby2ndterm />}
            />
            <Route
              path="/jss1result3rdterm"
              element={<Jss1resultby3rdterm />}
            />
            <Route path="/signresult" element={<Signresult />} />
            <Route
              path="/upload2ndtermjss1"
              element={<Createresult2ndterm />}
            />
            <Route path="/outline" element={<Outline />} />
            <Route path="/2ndterm2022" element={<Result2ndterm2022 />} />
            <Route path="/2ndterm2021" element={<Result2ndterm2021 />} />
            <Route
              path="/jss1results2ndterm/:id"
              element={<Resultdetails2022 />}
            />
            <Route path="/result1stterm2021" element={<Result1stterm2021 />} />
            <Route path="/search/:keyword" element={<CheckResult />} />

            <Route path="/ss1results/:id" element={<Ss1studentResult />} />

            {/* <Route path="/JSS1result" element={<Jss1result2 />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />

      {/* <PDFDownloadLink document={<PDFFile />} fileName="Form">
        {({ loading }) =>
          loading ? (
            <Button>Loading document...</Button>
          ) : (
            <Button>Download</Button>
          )
        }
      </PDFDownloadLink> */}
    </div>
  );
}

export default App;
