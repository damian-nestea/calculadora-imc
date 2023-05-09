export const imcLevels = [
  { level: "Abaixo do peso", color: "#333333", icon: "sad", imc: [0, 18.4] },
  { level: "Peso ideal", color: "#4fb443", icon: "happy", imc: [18.5, 24.9] },
  { level: "Acima do peso", color: "#d9b42c", icon: "sad", imc: [25, 29.9] },
  { level: "Obesidade", color: "#de061a", icon: "sad", imc: [30, 99] },
];

export const calculateImc = (height, weight) => {
  const imc = weight / (height * height);
  for (let i in imcLevels) {
    if (imc >= imcLevels[i].imc[0] && imc <= imcLevels[i].imc[1]) {
      imcLevels[i].currentImc = imc;
      return imcLevels[i];
    }
  }
  return null;
};
