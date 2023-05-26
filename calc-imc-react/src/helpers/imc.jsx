export const imcLevels = [
  { level: "Abaixo do peso", color: "#333333", icon: "sad", imc: [0, 18.49] },
  { level: "Peso ideal", color: "#4fb443", icon: "happy", imc: [18.5, 24.99] },
  { level: "Acima do peso", color: "#d9b42c", icon: "sad", imc: [25, 29.99] },
  { level: "Obesidade", color: "#de061a", icon: "sad", imc: [30, 99] },
];

export const calculateImc = (height, weight) => {
  const imc = weight / ((height / 100) * (height / 100));

  for (let level in imcLevels) {
    if (imc >= imcLevels[level].imc[0] && imc <= imcLevels[level].imc[1]) {
      let imcLevelsCopy = { ...imcLevels[level] };
      imcLevelsCopy.currentImc = Number(imc.toFixed(2));
      return imcLevelsCopy;
    }
  }

  return null;
};
