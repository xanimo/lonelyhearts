import { calcAge } from '../Age/Age';

export function countArray(array, minAge, maxAge) {
    let user = array;
    let count = 0;
    Object.keys(user).map(function(key, index) {
      let val = user[key];
      if (calcAge(val.dob) >= minAge && calcAge(val.dob) <= maxAge) {
      count = count + 1;
      }
    });
    return count;
}
