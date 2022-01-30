import React from "react";

const FormContext = React.createContext({
  FormStatus: false,
  setFormStatus: () => {},
});

export default FormContext;
