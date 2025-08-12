const { asignarAmigoSecreto } = require('../models/amigoSecretoModel');

function asignar(req, res) {
  const participantes = req.body.participantes;

  if (!Array.isArray(participantes) || participantes.length < 2) {
    return res.status(400).json({ error: 'Debe enviar un arreglo con al menos 2 participantes' });
  }

  try {
    const resultado = asignarAmigoSecreto(participantes);
    res.json({ asignaciones: resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { asignar };
