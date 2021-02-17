import { FunctionalComponent, h } from "preact";
import { Container, Grid } from "semantic-ui-react";
import Spacing from "./Spacing";
import RandomQuote from "./RandomQuote";
import { SavedQuotesListContextProvider } from "../contexts/SavedQuotesListContext";
import SavedQuotesList from "./SavedQuotesList";

const App: FunctionalComponent = () => {
  return (
    <SavedQuotesListContextProvider>
      <Container>
        <Spacing size={2} />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RandomQuote />
            </Grid.Column>
            <Grid.Column>
              <SavedQuotesList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </SavedQuotesListContextProvider>
  );
};

export default App;
