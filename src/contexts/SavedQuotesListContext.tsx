import { h, createContext, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getFromStorage, setInStorage } from "../helpers/localStorage";

type ValueType = {
  list: string[];
  onSave?: (quote: string) => void;
  onDelete?: (quote: string) => void;
  isNotInList?: (quote: string) => boolean;
};

export const SavedQuotesListContext = createContext<ValueType>({ list: [] });

export const SavedQuotesListContextProvider: FunctionalComponent = ({
  children,
}) => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const list = getFromStorage("kanyeList");

    if (list.length) {
      setList(list);
    }
  }, []);

  useEffect(() => {
    if (list.length) {
      setInStorage("kanyeList", list);
    }
  }, [list]);

  const onSave = (quote: string): void => {
    setList(list.concat(quote));
  };

  const onDelete = (quote: string): void => {
    setList(list.filter((item) => quote !== item));
  };

  const isNotInList = (quote: string): boolean => {
    return !list.includes(quote);
  };

  return (
    <SavedQuotesListContext.Provider
      value={{ list, onSave, onDelete, isNotInList }}
    >
      {children}
    </SavedQuotesListContext.Provider>
  );
};
