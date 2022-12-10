import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/MainRoutes";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/auth";



function App() {
  return (
    <UserProvider>
      <Container className="container__recipe">
        <ToastContainer />
        <Routes />
      </Container>
    </UserProvider>
  );
}

export default App;
