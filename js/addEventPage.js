function addEventPage() {
  localStorage.setItem("eventname", eventname.value);
  localStorage.setItem("eventdate", eventdate.value);
  localStorage.setItem("eventdescription", eventdescription.value);
  function localStorageItems() {
    var eName = localStorage.getItem("eventname");
    var eDate = localStorage.getItem("eventdate");
    var eDesc = localStorage.getItem("eventdescription");
    document.getElementById("addEvent").style.display = "none";
    const html = `
    <div class="book">
    <p>${eName}</p>
    <p>${eDate}</p>
    <p>${eDesc} </p>
    <button type="submit" onclick='${() => deletePost()}' >Delete</button>
     </div>`;
    document
      .querySelector(".event_container")
      .insertAdjacentHTML("afterbegin", html);
  }
  localStorageItems();

  function deletePost(el) {
    var element = document.querySelector(".book");
    element.remove();
  }
}
