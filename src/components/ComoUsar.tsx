"use client";
export function ComoUsar() {
  return (
    <details>
      <summary className="cursor-pointer">
        <b>Como usar?</b>
      </summary>
      <div>
        Colocar os valores de forma que pareça uma matriz. <br />
        Para elementos na mesma linha separe com <b>ESPAÇO</b>.
        <br />E para elementos de linhas diferentes separe com <b>ENTER</b>.
        <br />
        <b>
          Exemplo de matriz:
          <br />
          1 1
          <br />1 1
        </b>
      </div>
    </details>
  );
}
