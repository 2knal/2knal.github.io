export function isDayTime(): boolean {
  const hours = new Date().getHours()
  return (hours > 6 && hours < 19);
}

export function getTheme(): string {
  return isDayTime() ? 'light' : 'dark';
}
