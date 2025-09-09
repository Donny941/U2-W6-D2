const img = document.querySelectorAll(".img-fluid");

const card = document.querySelectorAll(".card");

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const summerSection = document.querySelector("#welcomeSummer");

const summerCard = summerSection.querySelectorAll(".card");

const contactModal = document.querySelector("#contactModal");

const body = document.getElementsByTagName("body")[0];

console.log(body);

const removeButton = document.getElementById("removeCards");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  const totalTrips = card.length + img.length;

  alertTrigger.addEventListener("click", () => {
    appendAlert(`Total trips for Today ${totalTrips}`, "success");
  });
}

removeButton.addEventListener("click", () => {
  card.forEach((card) => {
    card.remove();
  });
});

const hotSummer = () => {
  summerCard.forEach((card) => {
    const badge = document.createElement("span");
    badge.innerText = "HOT";
    badge.classList.add(
      "badge",
      "text-bg-danger",
      "position-absolute",
      "top-0",
      "end-0",
      "m-2"
    );
    card.append(badge);
  });
};

hotSummer();

contactModal.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "contactsModal");
  modal.classList.add("modal", "fade");
  modal.setAttribute("aria-labelledby", "introductionModalLabel");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="introductionModalLabel">Contact Me</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>We'll never share your email with anyone else.</p>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-info">Submit</button>
        </div>
      </div>
    </div>
 `;
  body.append(modal);
  const modalElement = document.getElementById("contactsModal");
  const bootModal = new bootstrap.Modal(modalElement);
  bootModal.show();
});
