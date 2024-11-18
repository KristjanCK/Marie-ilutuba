
document.addEventListener("DOMContentLoaded", function () {
    const ilutubaLocation = { lat: 58.385419, lng: 26.725385 };

    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 15,
        center: ilutubaLocation,
    });

    const marker = new google.maps.Marker({
        position: ilutubaLocation,
        map: map,
        title: "Marie Ilutuba",
    });
});
