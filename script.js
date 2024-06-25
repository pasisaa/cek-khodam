document.getElementById('khodamForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('jawaban').value;
    const birthdate = document.getElementById('birthdate').value;

    if (name && birthdate) {
        showLoader();
        setTimeout(() => {
            const khodam = checkKhodam(name, birthdate);
            document.getElementById('result').innerText = `Nama : ${name} \n\nTanggal Lahir : ${birthdate} \n\nKhodam Kamu Adalah\n ${khodam}`;
            hideLoader();
        }, 5000);
    }
});

function checkKhodam(jawaban, birthdate) {
    // Fungsi sederhana untuk mendapatkan khodam
    const khodams = ['HARIMAU SAKI GIGI', 'SAPI BALI', 'NAGA KALIBER', 'AYAM KAMPUS', 'ANJING GILA', 'MANTRI ORO', 'KUPU KUPU MALAM', 'KUDA PATA KAKI', 'SO MATI DEPE KHODAM'];
    const index = (jawaban.length + new Date(birthdate).getDate()) % khodams.length;
    return khodams[index];
}

function showLoader() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('container').style.display = 'none';
}

function hideLoader() {
    document.getElementById('hasil').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
}

function reload(){
    window.location.reload();
}