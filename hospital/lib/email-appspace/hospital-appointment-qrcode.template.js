module.exports = HospitalAppointmentProfileTemplate = () => {
  return `
    <link rel="stylesheet" href="/hospital/css/email-appspace.css">
    <div class="qrcode-appointment">

      <div id="qrcode"></div>

      <ul class="hospital-appointments-box qrcode-appointments">
        <li class="appointment">
          <div class="hospital-name">Sister of Mercy Childrens' Hospital</div>
          <div class="hospital-address">Silversmith Road,Petaluma,CA 58-403-2938</div>
          <div class="hospital-appointment-time">9:30 AM - Wednesday, January 2 (2019)</div>
        </li>
      </ul>

    </div>

        `;
}

