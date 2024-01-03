"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Mustahik } from "@/types/mustahik";

type State = {
  upsertApplicantDialog: boolean;
  formType: "update" | "create";
};

type Context = {
  dialogsStates: State;
  setDialogsStates: Dispatch<SetStateAction<State>>;
  mustahik: Mustahik;
  setMustahik: Dispatch<SetStateAction<Mustahik>>;
};

const DialogsContext = createContext<Context>({
  dialogsStates: {} as State,
  setDialogsStates: {} as Dispatch<SetStateAction<State>>,
  mustahik: {} as Mustahik,
  setMustahik: {} as Dispatch<SetStateAction<Mustahik>>,
});

type Props = {
  children: ReactNode;
};

export function useDialogStates() {
  return useContext(DialogsContext);
}

export function DialogsProvider(props: Props) {
  const [state, setState] = useState<State>({
    upsertApplicantDialog: false,
    formType: "create",
  });

  const [mustahikState, setMustahikState] = useState({} as Mustahik);

  return (
    <DialogsContext.Provider
      value={{
        dialogsStates: state,
        setDialogsStates: setState,
        mustahik: mustahikState,
        setMustahik: setMustahikState,
      }}
    >
      {props.children}
    </DialogsContext.Provider>
  );
}
