import { useEffect, useRef } from "react";
import { DivHome, DivInput, InputHome, TitleHome } from "../style/Home";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const InputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    InputRef.current?.focus();
  }, []);

  const nav = useNavigate();
  const RedirectStore = (name: string) => {
    nav(`/store/${name}`);
  };

  return (
    <DivHome>
      <TitleHome>Cardio Online</TitleHome>
      <DivInput>
        <InputHome
          type="text"
          placeholder="Busque a loja"
          ref={InputRef}
          onKeyDown={(e: any) =>
            e.key === "Enter" ? RedirectStore(e.currentTarget.value) : null
          }
        />
      </DivInput>
    </DivHome>
  );
};

export default Search;
