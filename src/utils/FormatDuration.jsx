const DOUBLE_DIGIT_FORTMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  }) //Ensures we always have double digits

export function FormatDuration (duration) {
    const hrs = Math.floor(duration /60 /60);
    const mins = Math.floor((duration - hrs *60 *60) / 60);
    const secs = duration % 60;

    return (`${hrs === 0 ? "" : hrs+":"}${DOUBLE_DIGIT_FORTMATTER.format(mins)}:${DOUBLE_DIGIT_FORTMATTER.format(secs)}`);
}