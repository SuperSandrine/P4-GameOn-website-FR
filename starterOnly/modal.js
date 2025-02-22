// DOM Elements
const modalBg = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const modalConfirmation = document.querySelector(".modal-confirmation");
const modalBody = document.querySelector(".modal-body");
const btnModalConfirmation = document.querySelector(
  ".modal-confirmation-close"
);

// DOM selection of a container whose got the formData class to show the
// error flag when we are data controling, in order to show the error message
const containerQ = document.querySelector("#quantity").parentNode;
const containerB = document.querySelector("#birthdate").parentNode;
const containerE = document.querySelector("#email").parentNode;
const containerLN = document.querySelector("#lastName").parentNode;
const containerFN = document.querySelector(".formData");
// .parentNode allows us to catch the parent of an ID for instance,
// here we can apply the data-error (from css) attribute link to the formData class.

// const today and birthdate.max will not allow the user to use a future day as birthdate.
const today = new Date().toISOString().split("T")[0];
birthdate.max = today;

// Those variable are useful for a second confirmation while
// validate() function is doing its job.
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  modalConfirmation.style.display = "none";
}

//Close modal with X button
const modalClosure = document.querySelector(".closeModal");
// >function:
function closeModal() {
  modalBg.style.display = "none";
  modalBody.style.display = "block";
}
// >play of function:
modalClosure.addEventListener("click", closeModal);

//------------------------Datas controls on text-------------------
// This first control allows the user to correct his inputs when typing in.

// Control of datas, using .text-control class (text and number in input):
const inputsText = document.querySelectorAll(".text-control");
// 5 empty variables created to save the user datas:
let firstName, lastName, email, birthday, quantity;

//Then all the checker function:
const firstNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    firstName = null;
    A = 0;
    // In purpose to apply [data-error] and [data-error-visible] attributes
    // we are using setAttribute method. For doing so, we had previously selected
    // the .formData class div (so called containerFN).
    // then we save the result in varibale firstname (to save data users) and A (to pass validate()).
  } else if (value.match(/^((\s{2,99})+.)|(\s{2,99})|.+(\s{2,99})+.$/)) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer deux espaces consécutifs."
    );
    firstName = null;
    A = 0;
    // regex control with: https://regex101.com/r/0filKf/1
    // This regex controls two whitespace character (from 2 to 99).
    // at the beginning of name OR if the name only have whitespaces
    // OR whitespaces in the middle of name
  } else if (value.match(/^([0-9]+.)|([0-9]+)|.+([0-9]+)+.$/)) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer de chiffres"
    );
    firstName = null;
    A = 0;
  } else if (
    // here are all accepted special characters
    !value.match(
      /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]*$/
    )
  ) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer de caractères spéciaux non-autorisés."
    );
    firstName = null;
    A = 0;
  } else if (value == null || value == "" || !value) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    firstName = null;
    A = 0;
  } else {
    containerFN.removeAttribute("data-error-visible", false);
    firstName = value;
    A = 1;
  }
};

const lastNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    lastName = null;
    B = 0;
  } else if (value == null || value == "" || !value) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    lastName = null;
    B = 0;
  } else if (value.match(/^([0-9]+.)|([0-9]+)|.+([0-9]+)+.$/)) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer de chiffres"
    );
    firstName = null;
    A = 0;
  } else if (
    !value.match(
      /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]*$/
    )
  ) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer de caractères spéciaux non-autorisés."
    );
    firstName = null;
    A = 0;
  } else if (value.match(/^((\s{2,99})+.)|(\s{2,99})|.+(\s{2,99})+.$/)) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veillez à ne pas entrer deux espaces consécutifs."
    );
    lastName = null;
    B = 0;
  } else {
    containerLN.removeAttribute("data-error-visible", false);
    lastName = value;
    B = 1;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    containerE.setAttribute("data-error-visible", true);
    containerE.setAttribute(
      "data-error",
      "Veuillez entrer une adresse email valide."
    );
    email = null;
    C = 0;
  } else {
    containerE.removeAttribute("data-error-visible", false);
    email = value;
    C = 1;
  }
};
// email regex from : https://regexr.com/3e48o

// I found and edited this regex for the birthdate, but I wasn't fully convinced
// mainly with the years setting : regex age: /^(((0)[0-9])|((1)[0-2])|)(\/|.|-)([0-2][0-9]|(3)[0-1])(\/|.|-)([1-2][9,0][0-9][0-9])$/gi
// Then, I applied a age function, to calculate the age and control and comment the date of birth
// accordingly of the conditions behind. Also, those conditions should be specified with the
// next client meeting.
// I also created a new style for those tolerated errors
function getAge(data) {
  var today = new Date();
  var birthDate = new Date(data);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const birthdateChecker = (value) => {
  const age = getAge(value);
  if (age > 100) {
    containerB.removeAttribute("data-error-small-visible", false);
    containerB.setAttribute("data-error-small-visible", true);
    containerB.setAttribute(
      "data-error-small",
      "Vous avez au-delà de 100 ans !  Vérifiez votre âge mais ce critère n'est pas obligatoire."
    );
    birthday = value;
  } else if (age >= 0 && age < 3) {
    containerB.removeAttribute("data-error-small-visible", false);
    containerB.setAttribute("data-error-small-visible", true);
    containerB.setAttribute(
      "data-error-small",
      "Vous avez en-deçà de 3 ans ! Vérifiez votre âge mais ce critère n'est pas obligatoire."
    );
    birthday = value;
  } else if (age < 0) {
    containerB.removeAttribute("data-error-small-visible", false);
    containerB.setAttribute("data-error-small-visible", true);
    containerB.setAttribute(
      "data-error-small",
      "Vous ne pouvez pas venir du futur ! Vérifiez votre âge mais ce critère n'est pas obligatoire."
    );
    birthday = value;
  } else if (age >= 3) {
    containerB.removeAttribute("data-error-small-visible", false);
    birthday = value;
  } else if ((birthday = !value)) {
    containerB.removeAttribute("data-error-small-visible", false);
  }
};

const quantityChecker = (value) => {
  if (value < 0 || (value >= 99) | !value) {
    containerQ.setAttribute("data-error-visible", true);
    containerQ.setAttribute(
      "data-error",
      "Vous devez choisir une valeur numérique entre 0 et 99."
    );
    quantity = null;
    D = 0;
  } else {
    containerQ.removeAttribute("data-error-visible", false);
    quantity = value;
    D = 1;
  }
};

//We can also choose the event "focusout", could be intersting specially when we are setting
// the date value in the input birthdate. But not really for the other input, in my
// opinion.
inputsText.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstNameChecker(e.target.value);
        break;
      case "lastName":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
// For each inputs, with .text-control class, we are listening the "input" or the change of its value.
// We switch by targeting ID, On each ID, we are playing the checker function on value of the ID case.
// we break and we playing the next case.
// On each case, the checker function playing is own control.

//-------------------- Data control on radio and checkbox--------------------------
// Control of datas class checkbox-label (radio and checkbox):
const inputsCheckbox = document.querySelectorAll(".checkbox-input");
const inputsRadio = document.getElementsByName("location");
const containerR = document.getElementsByName("location").parentNode;

let place;
let checkboxNewsVar = false;

// Control of place, once the checkbox is valid, we stock the data in a variable
inputsRadio.forEach((input) => {
  input.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "location1":
        if (location1.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location2":
        if (location2.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location3":
        if (location3.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location4":
        if (location4.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location5":
        if (location5.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location6":
        if (location6.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      default:
        null;
      // due to Radio system, it's either one or another value,
      // So it's unecessary to add an error message, except in
      // case of an empty box when submited.
      // So they have an error message after first attempt of submission,
      // then, we need to remove the error attribute once it's checked.
    }
  });
});
inputsCheckbox.forEach((input) => {
  input.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "checkboxCGU":
        if (checkboxCGU.checked) {
          checkboxCGU.parentNode.removeAttribute("data-error-visible", false);
        } else {
          checkboxCGU.parentNode.setAttribute("data-error-visible", true);
          checkboxCGU.parentNode.setAttribute(
            "data-error",
            "Vous devez vérifier que vous acceptez les termes et conditions ."
          );
        }
        break;
      //CGU have to be checked, it's checked in advance,
      // in case the user remove the checked, an error message will appear.
      case "checkboxNews":
        if (checkboxNews.checked) {
          checkboxNewsVar = true;
        } else {
          checkboxNewsVar = false;
        }
        // NewsVar, the checkbobNewsVar have a default false value in case the user
        // doesn't checked the box
        break;
      default:
        null;
    }
  });
});

//the form should be valid when submit:
// The submission function is played in the html, in <form> "onsubmit" event
// An additional control is done in the function validate with ABC variables
// filled earlier when the input passed checker
function validate() {
  if (A + B + C + D + E < 5) {
    if (!E) {
      location1.parentNode.setAttribute("data-error-visible", true);
      location1.parentNode.setAttribute(
        "data-error",
        "Vous devez choisir une option."
      );
    }
    if (!D) {
      containerQ.setAttribute("data-error-visible", true);
      containerQ.setAttribute("data-error", "Vous devez choisir une quantité.");
    }
    if (!C) {
      containerE.setAttribute("data-error-visible", true);
      containerE.setAttribute(
        "data-error",
        "Vous devez entrer une adresse email."
      );
    }
    if (!B) {
      containerLN.setAttribute("data-error-visible", true);
      containerLN.setAttribute("data-error", "Vous devez entrer un nom.");
    }
    if (!A) {
      containerFN.setAttribute("data-error-visible", true);
      containerFN.setAttribute("data-error", "Vous devez entrer un prénom.");
    }
    return false;
  }
  if (A + B + C + D + E == 5 && checkboxCGU.checked) {
    modalBody.style.display = "none";
    modalConfirmation.style.display = "flex";
    document.querySelector("#reserveForm").reset();
    // Previous part cleans inputs.
    // Next part cleans user datas.
    A = 0;
    B = 0;
    C = 0;
    D = 0;
    E = 0;
    firstName = null;
    lastName = null;
    email = null;
    birthdate = null;
    quantity = null;
    place = null;
    checkboxNewsVar = null;
    containerB.removeAttribute("data-error-small-visible", false);
    return true;
  } else {
    alert("Il y a un autre problème, contactez l'administrateur du site.");
    return false;
  }
}

btnModalConfirmation.addEventListener("click", (e) => {
  modalBg.style.display = "none";
  modalBody.style.display = "block";
});

// Next line prevent default behaviour on submission after validation: modal closing,
// modal initialisation with click
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Next function avoid the default behavious of navigator and its buble error message.
for (var i = 0; i < form.length; i++) {
  form[i].addEventListener(
    "invalid",
    function (e) {
      e.preventDefault();
    },
    true
  );
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
