export const getScore = (cards) => {
  let score = 0;
  cards.forEach((card) => {
    const cardValue = card.slice(1);
    switch (cardValue) {
      case "2":
      case "J":
        score += 2;
        break;
      case "3":
      case "Q":
        score += 3;
        break;
      case "4":
      case "K":
        score += 4;
        break;
      case "5":
        score += 5;
        break;
      case "6":
        score += 6;
        break;
      case "7":
        score += 7;
        break;
      case "8":
        score += 8;
        break;
      case "9":
        score += 9;
        break;
      case "T":
        score += 10;
        break;
      case "A":
        if (score + 11 > 21) {
          score += 1;
        } else {
          score += 11;
        }
        break;
      default:
        score = 0;
    }
  });
  return score;
};
