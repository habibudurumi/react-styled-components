/** @format */
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  color: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#033",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
