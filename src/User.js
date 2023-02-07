"use strict";
class User {
  constructor(title, first, last, city, country, age, email, picture) {
    this.title = title;
    this.first = first;
    this.last = last;
    this.city = city;
    this.country = country;
    this.age = age;
    this.email = email;
    this.picture = picture;
    this.present = false;
    this.element = this.#generateUserElement();
    this.element.addEventListener("click", (e) => {
      if (e.currentTarget.dataset.present === "true") {
        this.present = "false";
        e.currentTarget.dataset.present = false;
      } else {
        this.present = "true";
        e.currentTarget.dataset.present = true;
      }
      console.log(e.currentTarget.dataset.present);
    });
  }

  render() {
    document.querySelector("main").appendChild(this.element);
    return this;
  }

  #generateUserElement() {
    const containerUserElement = document.createElement("div");
    containerUserElement.classList.add("user");
    containerUserElement.dataset.present = false;
    const childHTML = `
        <img src="${this.picture}">
		<div class="user--info">
				<h1>${this.title} ${this.first} ${this.last}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
		<a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>
    `;
    containerUserElement.insertAdjacentHTML("afterbegin", childHTML);
    return containerUserElement;
  }
}

export default User;
