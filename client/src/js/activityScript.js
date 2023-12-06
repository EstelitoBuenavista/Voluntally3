const API_URL = "http://localhost:3000";

function getStatus(activity) {
  const currentDate = new Date();
  const activityDate = new Date(activity.date);

  if (activityDate > currentDate) {
    return "Upcoming";
  } else if (activityDate < currentDate) {
    return "Completed";
  } else {
    return "Ongoing";
  }
}

function renderActivities(activities) {
  const tbody = document.getElementById("activitiesTableBody");
  if (!tbody) {
    console.error("Table body element not found.");
    return;
  }

  tbody.innerHTML = "";

  if (activities.length === 0) {
    const emptyRow = `
      <tr>
        <td class="Table__data" colspan="5">No activities found.</td>
      </tr>
    `;
    tbody.innerHTML = emptyRow;
    return;
  }

  activities.forEach((activity) => {
    const status = getStatus(activity);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="Table__data">${activity.title}</td>
      <td class="Table__data">${activity.date}</td>
      <td class="Table__data">${activity.organization}</td>
      <td class="Table__data">${activity.link}</td>
      <td class="Table__data">${status}</td>
      <td class="Table__data">
        <button class="delete-button DeleteButton" data-id="${activity.id}">✕</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Add event listener for delete buttons
  tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
      const activityId = event.target.getAttribute("data-id");
      deleteActivity(activityId);
    }
  });
}

function fetchActivities() {
  fetch(`${API_URL}/activities`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderActivities(data);
    })
    .catch((error) => {
      console.error("Error fetching activities:", error);
    });
}

function deleteActivity(activityId) {
  // Send a DELETE request to the server to delete the activity
  fetch(`${API_URL}/activities/${activityId}`, {
    method: "DELETE",
  })
    .then(() => {
      console.log("Activity deleted");
      fetchActivities(); // Refresh the activities after deletion
    })
    .catch((error) => {
      console.error("Error deleting activity:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchActivities();

  // Add an event listener for the form submission
  document
    .getElementById("activityForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the form values
      const title = document.getElementById("activityTitle").value;
      const date = document.getElementById("activityDate").value;
      const organization = document.getElementById("activityOrg").value;
      const link = document.getElementById("activityLink").value;

      // Create an object representing the new activity
      const newActivity = {
        title: title,
        date: date,
        organization: organization,
        link: link,
      };

      // Send a POST request to the server to add the new activity
      fetch(`${API_URL}/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("New activity added:", data);
          window.location.href = "./admin-activities.html";
        })
        .catch((error) => {
          console.error("Error adding activity:", error);
        });
    });
});
