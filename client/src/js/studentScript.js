const API_URL = "http://localhost:3000";

function renderStudents(students) {
  const tbody = $("#studentsTable tbody");
  tbody.empty(); // Clear the table body

  students.forEach((student) => {
    <>
    
    </>
  });
}

function fetchStudents() {
  $.get(`${API_URL}/api/student/`, (data) => {
    renderStudents(data);
  });
}

$("#newStudent").on("submit", (e) => {
  e.preventDefault();
  const IDnumber = $("#FormIDnumber").val();
  const studentName = $("#FormFullName").val();
  const course = $("#FormCourse").val();
  const year = $("#FormYear").val();

  $.ajax({
    url: `${API_URL}/students`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ IDnumber, name: studentName, course, year }),
    success: (data) => {
      fetchStudents();
      location.href = "admin-students.html";
    },
  });
});

$("body").on("click", ".update-button", function () {
  const id = $(this).data("id");
  const content = $(this).closest("tr").find(".note-content").prop("value");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ content }),
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".delete-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "DELETE",
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".add-points-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ operation: "add" }),
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".subtract-points-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ operation: "subtract" }),
    success: () => {
      fetchStudents();
    },
  });
});

fetchStudents();
