import React from "react";

const ButtonAdd = ({ handleSubmit }: { handleSubmit: any }) => {
  return (
    <button onClick={() => handleSubmit} type="submit">
      aggiungi
    </button>
  );
};

export default ButtonAdd;
