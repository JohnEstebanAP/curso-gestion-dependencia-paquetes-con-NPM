const messages = [
  "John",
  "Luisa",
  "Esteban",
  "Fernanda",
  "Te Amo Luisa"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()*messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
