export const imcLevels = [
  { level: "Abaixo do peso", color: "#FFFF00", icon: "sad", imc: [0, 18.4] },
  { level: "Peso ideal", color: "#00FF00", icon: "happy", imc: [18.5, 24.9] },
  { level: "Acima do peso", color: "#FFA500", icon: "sad", imc: [25, 29.9] },
  { level: "Obesidade", color: "#FF0000", icon: "sad", imc: [30, 99] },
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
