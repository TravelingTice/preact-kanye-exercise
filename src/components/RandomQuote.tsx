import { h, FunctionComponent } from "preact";
import { useContext, useState } from "preact/hooks";
import { Button, Grid, GridColumn, Header } from "semantic-ui-react";
import { SavedQuotesListContext } from "../contexts/SavedQuotesListContext";

const RandomQuote: FunctionComponent = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const { onSave, isNotInList } = useContext(SavedQuotesListContext);

  const onGetRandomQuote = async (): Promise<void> => {
    setLoading(true);

    const data = await fetch("https://api.kanye.rest").then((res) =>
      res.json()
    );

    setQuote(data.quote);

    setLoading(false);
  };

  return (
    <Grid>
      <GridColumn>
        <div
          style={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header textAlign="center" as="h2">
            {quote && `"${quote}"`}
          </Header>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button loading={loading} onClick={onGetRandomQuote} secondary>
            Get a random quote!
          </Button>
          {quote && isNotInList && isNotInList(quote) && (
            <Button color="green" onClick={() => onSave && onSave(quote)}>
              Save
            </Button>
          )}
        </div>
      </GridColumn>
    </Grid>
  );
};

export default RandomQuote;
