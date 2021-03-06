const formatDigit = (number) => {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

export const secToHMS = (seconds) => {
  // 1- Extract hours:
  const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
  seconds %= 3600; // seconds remaining after extracting hours
  // 2- Extract minutes:
  const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
  // 3- Keep only seconds not extracted to minutes:
  seconds = parseInt(seconds % 60);

  let result = '';
  if (hours) result += `${formatDigit(hours)} hour${hours === 1 ? '' : 's'}`;
  if (minutes) result += ` ${formatDigit(minutes)} minute${minutes === 1 ? '' : 's'}`;
  if (seconds) result += ` ${formatDigit(seconds)} second${seconds === 1 ? '' : 's'}`;

  return result;
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
