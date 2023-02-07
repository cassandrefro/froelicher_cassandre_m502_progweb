"use strict";
import User from "./User.js";

const getUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const { results } = await response.json();
    //console.log(results);
    const users = [];
    results.forEach((user) => {
      users.push(
        new User(
          user.name.title,
          user.name.first,
          user.name.last,
          user.location.city,
          user.location.country,
          user.dob.age,
          user.email,
          user.picture.large
        )
      );
    });
    console.log(users);
    console.log(users[0].last);
    console.log(users[1].last);
    console.log(users[0].last < users[1].last);
    users.sort((user1, user2) => {
      if (user1.last < user2.last) {
        return -1;
      } else if (user1.last > user2.last) {
        return -1;
      } else {
        return 0;
      }
    });
    users.forEach((user) => user.render());
    console.log(users);
  } catch (e) {
    console.error(e.message);
  }
};
getUserData();
