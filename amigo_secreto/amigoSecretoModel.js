function asignarAmigoSecreto(participantes) {
  if (participantes.length < 2) {
    throw new Error('Se necesitan al menos 2 participantes');
  }

  let asignaciones = {};
  let disponibles = [...participantes];

  for (let i = 0; i < participantes.length; i++) {
    let participante = participantes[i];
    let posibles = disponibles.filter(p => p !== participante);

    if (posibles.length === 0) {
      return asignarAmigoSecreto(participantes);
    }

    let elegido = posibles[Math.floor(Math.random() * posibles.length)];

    asignaciones[participante] = elegido;
    disponibles = disponibles.filter(p => p !== elegido);
  }

  return asignaciones;
}

module.exports = { asignarAmigoSecreto };
