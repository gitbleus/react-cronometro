const MAX_SECONDS = 99 * 3600 + 59 * 60 + 59;

export const parseTimeInput = (input) => {
  if (!input) return 0;

  const text = input.toLowerCase().trim();

  if (/^\d+$/.test(text)) {
    const seconds = parseInt(text) * 60;
    return Math.min(seconds, MAX_SECONDS);
  }

  let totalSeconds = 0;

  const matches = text.matchAll(/(\d+)\s*([a-z]+)/g);

  for (const match of matches) {
    const value = parseInt(match[1]);
    const unit = match[2];

    if (unit.startsWith('h')) { 
      totalSeconds += value * 3600;
    } else if (unit.startsWith('m')) { 
      totalSeconds += value * 60;
    } else if (unit.startsWith('s')) { 
      totalSeconds += value;
    }
  }

  return Math.min(totalSeconds, MAX_SECONDS);
}