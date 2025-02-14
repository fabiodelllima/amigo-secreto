import { MAX_TENTATIVAS_SORTEIO, MENSAGENS } from "../constants/messages.js";

function gerarParAmigos(quemEntrega, possiveisRecebedores) {
  const indexReceber = Math.floor(Math.random() * possiveisRecebedores.length);
  const quemRecebe = possiveisRecebedores[indexReceber];

  return {
    quemEntrega,
    quemRecebe,
    possiveisRecebedoresRestantes: possiveisRecebedores.filter(
      (amigo) => amigo !== quemRecebe
    ),
  };
}

export function gerarSorteio(amigos) {
  let tentativas = 0;

  while (tentativas < MAX_TENTATIVAS_SORTEIO) {
    const resultado = amigos.reduce(
      (acc, quemEntrega) => {
        if (acc.falha) return acc;
        const possiveisRecebedores = amigos.filter(
          (amigo) => !acc.jaReceberam.includes(amigo) && amigo !== quemEntrega
        );

        if (possiveisRecebedores.length === 0) {
          return { ...acc, falha: true };
        }

        const par = gerarParAmigos(quemEntrega, possiveisRecebedores);

        return {
          pares: [
            ...acc.pares,
            {
              quemEntrega: par.quemEntrega,
              quemRecebe: par.quemRecebe,
            },
          ],
          jaReceberam: [...acc.jaReceberam, par.quemRecebe],
          falha: false,
        };
      },
      { pares: [], jaReceberam: [], falha: false }
    );

    if (!resultado.falha) {
      return {
        sucesso: true,
        sorteio: resultado.pares,
      };
    }

    tentativas++;
  }

  return {
    sucesso: false,
    erro: MENSAGENS.ERRO_SORTEIO,
  };
}
