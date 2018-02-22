export const calcAge = birthday => {
      let birthdayDate = new Date(birthday.split(' ')[0].replace(/\-+/g, '/'));
      const ageDifMs = parseInt(Date.now() - birthdayDate.getTime(), 10);
      // console.log(ageDifMs);
      const ageDate = new Date(ageDifMs);
      // console.log(ageDate);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      return age;
    };