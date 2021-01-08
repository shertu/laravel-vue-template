/**
 * Calculates the current age for the specified birth date.
 *
 * @param {Date} birthDate
 * @return {number}
 */
export function calculateAgeFromBirthdate(birthDate: Date): number {
  const dateToday: Date = new Date();
  let age: number = dateToday.getFullYear() - birthDate.getFullYear();
  const m = dateToday.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && dateToday.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
