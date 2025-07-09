document.getElementById("show-slots").addEventListener("click", function () {
  const people = document.getElementById("people").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const slotsSection = document.getElementById("slots-section");
  const slotsContainer = document.getElementById("slots");

  // Basic validation
  if (!people || !date || !time) {
    alert("Please fill out all fields before continuing.");
    return;
  }

  // Example available time slots
  const availableSlots = [
    "10:00 - 10:30",
    "11:00 - 11:30",
    "12:00 - 12:30",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "5:00 PM - 5:30 PM"
  ];

  // Clear previous slots
  slotsContainer.innerHTML = "";

  // Populate time slots
  availableSlots.forEach((slot) => {
    const button = document.createElement("button");
    button.className =
      "bg-[#4b2e2b] text-white py-2 px-4 rounded hover:bg-[#3a241f]";
    button.textContent = slot;
    button.onclick = () => {
      alert(`Reservation confirmed for ${people} person(s) on ${date} at ${slot}.`);
    };
    slotsContainer.appendChild(button);
  });

  slotsSection.classList.remove("hidden");
});
