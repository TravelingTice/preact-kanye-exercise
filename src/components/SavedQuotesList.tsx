import { h, FunctionComponent } from "preact";
import { useContext } from "preact/hooks";
import { Button, Header, Icon, List } from "semantic-ui-react";
import { SavedQuotesListContext } from "../contexts/SavedQuotesListContext";
import Spacing from "./Spacing";

const SavedQuotesList: FunctionComponent = () => {
  const { list, onDelete } = useContext(SavedQuotesListContext);

  return (
    <div>
      <Header as="h2">Saved quotes</Header>
      <Spacing size={2}>
        <List divided relaxed>
          {list.map((quote) => (
            <List.Item>
              <List.Content verticalAlign="middle" floated="right">
                <Button
                  onClick={() => onDelete && onDelete(quote)}
                  color="red"
                  icon
                >
                  <Icon name="trash" />
                </Button>
              </List.Content>
              <List.Content verticalAlign="middle">{quote}</List.Content>
            </List.Item>
          ))}
        </List>
      </Spacing>
    </div>
  );
};

export default SavedQuotesList;
