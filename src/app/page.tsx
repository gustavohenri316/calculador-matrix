"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [matrizA, setMatrizA] = useState("");
  const [matrizB, setMatrizB] = useState("");
  const [resultado, setResultado] = useState<number[][]>([]);

  function MostrarMatriz(inputText: string): number[][] {
    const linhasTexto = inputText.trim().split("\n");
    const matriz = linhasTexto.map((linha) => {
      return linha
        .trim()
        .split(/\s+/)
        .map((v) => {
          return parseFloat(v);
        });
    });
    return matriz;
  }

  function somarMatrizes() {
    const matrizAArray = MostrarMatriz(matrizA);
    const matrizBArray = MostrarMatriz(matrizB);
    if (
      (matrizAArray.length === 1 && matrizAArray[0].length === 1) ||
      (matrizBArray.length === 1 && matrizBArray[0].length === 1)
    ) {
      if (matrizAArray[0].length === 1) {
        toast.error("Matriz A precisa ter mais de um elemento!");
        return;
      } else if (matrizBArray[0].length === 1) {
        toast.error("Matriz B precisa ter mais de um elemento!");
        return;
      }
    } else {
      if (
        matrizAArray.length !== matrizBArray.length ||
        matrizAArray[0].length !== matrizBArray[0].length
      ) {
        toast.error("As matrizes precisam ter a mesma dimensão!");
        return;
      }
      const resultadoArray: number[][] = [];
      for (let i = 0; i < matrizAArray.length; i++) {
        resultadoArray.push([]);
        for (let j = 0; j < matrizAArray[0].length; j++) {
          resultadoArray[i].push(matrizAArray[i][j] + matrizBArray[i][j]);
        }
      }
      setResultado(resultadoArray);
    }
  }
  function subtrairMatrizes() {
    const matrizAArray = MostrarMatriz(matrizA);
    const matrizBArray = MostrarMatriz(matrizB);

    if (
      (matrizAArray.length === 1 && matrizAArray[0].length === 1) ||
      (matrizBArray.length === 1 && matrizBArray[0].length === 1)
    ) {
      if (matrizAArray[0].length === 1) {
        toast.error("Matriz A precisa ter mais de um elemento!");
        return;
      } else if (matrizBArray[0].length === 1) {
        toast.error("Matriz B precisa ter mais de um elemento!");
        return;
      }
    } else {
      if (
        matrizAArray.length !== matrizBArray.length ||
        matrizAArray[0].length !== matrizBArray[0].length
      ) {
        toast.error("As matrizes precisam ter a mesma dimensão!");
        return;
      }
      const resultadoArray: number[][] = [];
      for (let i = 0; i < matrizAArray.length; i++) {
        resultadoArray.push([]);
        for (let j = 0; j < matrizAArray[0].length; j++) {
          resultadoArray[i].push(matrizAArray[i][j] - matrizBArray[i][j]);
        }
      }
      setResultado(resultadoArray);
    }
  }

  function multiplicarMatrizes() {
    const matrizAArray = MostrarMatriz(matrizA);
    const matrizBArray = MostrarMatriz(matrizB);

    if (
      (matrizAArray.length === 1 && matrizAArray[0].length === 1) ||
      (matrizBArray.length === 1 && matrizBArray[0].length === 1)
    ) {
      if (matrizAArray[0].length === 1) {
        toast.error("Matriz A precisa ter mais de um elemento!");
        return;
      } else if (matrizBArray[0].length === 1) {
        toast.error("Matriz B precisa ter mais de um elemento!");
        return;
      }
    } else {
      if (matrizAArray[0].length !== matrizBArray.length) {
        toast.error(
          "O número de colunas da matriz A deve ser igual ao número de linhas da matriz B!"
        );
        return;
      }

      const resultadoArray: number[][] = [];
      for (let i = 0; i < matrizAArray.length; i++) {
        resultadoArray.push([]);
        for (let j = 0; j < matrizBArray[0].length; j++) {
          let soma = 0;
          for (let k = 0; k < matrizBArray.length; k++) {
            soma += matrizAArray[i][k] * matrizBArray[k][j];
          }
          resultadoArray[i].push(soma);
        }
      }
      setResultado(resultadoArray);
    }
  }

  return (
    <div className="text-center w-screen h-screen flex justify-center bg-neutral-100 max-sm:h-full">
      <div className="mt-28 max-sm:mt-16 max-sm:w-full">
        <h1 className="text-5xl max-sm:text-3xl">Calculador de Matriz</h1>
        <br />
        <details>
          <summary className="cursor-pointer">
            <b>Como usar?</b>
          </summary>
          <div id="text-info">
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
        <div className="flex flex-col ">
          <div className="max-sm:flex-col flex items-center justify-center mt-10 gap-4 w-full">
            <div className="max-sm:w-full max-sm:px-4 w-full">
              <h3 className="fw-bold text-xl">Matriz A:</h3>
              <textarea
                id="matrizA"
                className="h-28 shadow rounded-md outline-none border-gray-500 max-sm:w-full p-2"
                value={matrizA}
                onChange={(e) => setMatrizA(e.target.value)}
              ></textarea>
            </div>
            <div className="max-sm:w-full max-sm:px-4 w-full">
              <h3 className="fw-bold text-xl">Matriz B:</h3>
              <textarea
                id="matrizB"
                className="h-28 shadow rounded-md outline-none border-gray-500 max-sm:w-full p-2"
                value={matrizB}
                onChange={(e) => setMatrizB(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mt-12">
            <div className="gap-2 flex items-center justify-center max-sm:flex-col max-sm:w-full max-sm:px-4">
              <button
                className="border p-2 rounded-md bg-green-800 max-sm:w-full text-white w-full hover:bg-green-900"
                onClick={somarMatrizes}
              >
                Somar
              </button>
              <button
                className="border p-2 rounded-md bg-red-800 max-sm:w-full text-white w-full hover:bg-red-900"
                onClick={subtrairMatrizes}
              >
                Subtrair
              </button>
              <button
                className="border p-2 rounded-md bg-blue-800 max-sm:w-full text-white w-full hover:bg-blue-900"
                onClick={multiplicarMatrizes}
              >
                Multiplicar
              </button>
            </div>
          </div>

          <div className="bg-neutral-100 mt-8 max-sm:mb-6">
            <center>
              <h2 className="text-2xl pb-4">Resultado:</h2>

              {resultado.length > 0 && (
                <table className="rounded-sm">
                  <tbody className="rounded-sm">
                    {resultado.map((linha, index) => (
                      <tr key={index} className=" rounded-md">
                        {linha.map((valor, idx) => (
                          <td key={idx}>
                            <div className="border py-6 px-6 text-center rounded-md text-xl hover:shadow ">
                              {valor}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
