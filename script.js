// Event listener untuk menangani form submit
document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);

    // Validasi input
    if (isNaN(base) || isNaN(height) || isNaN(sideA) || isNaN(sideB)) {
        alert("Mohon masukkan angka yang valid.");
        return;
    }

    // Hitung Luas Segitiga (1/2 * alas * tinggi)
    const area = 0.5 * base * height;

    // Hitung Keliling Segitiga (alas + sisi A + sisi B)
    const perimeter = base + sideA + sideB;

    // Tampilkan hasil
    document.getElementById('areaResult').textContent = area.toFixed(2);
    document.getElementById('perimeterResult').textContent = perimeter.toFixed(2);

    // Update simulasi segitiga di SVG
    updateTriangleSimulation(base, height);
});

// Fungsi untuk memperbarui simulasi segitiga di SVG
function updateTriangleSimulation(base, height) {
    const svgWidth = 300;
    const svgHeight = 300;

    // Skalakan nilai input ke dalam dimensi SVG
    const scaledBase = base / 2;  // Setengah dari alas ditempatkan di tengah
    const scaledHeight = height / 2;

    // Titik segitiga: (x1, y1) - kiri bawah, (x2, y2) - kanan bawah, (x3, y3) - puncak
    const x1 = svgWidth / 2 - scaledBase;
    const y1 = svgHeight - 20;  // sedikit jarak dari bawah
    const x2 = svgWidth / 2 + scaledBase;
    const y2 = svgHeight - 20;
    const x3 = svgWidth / 2;
    const y3 = svgHeight - 20 - scaledHeight;

    // Atur atribut 'points' untuk segitiga di SVG
    const triangleShape = document.getElementById('triangleShape');
    triangleShape.setAttribute('points', `${x1},${y1} ${x2},${y2} ${x3},${y3}`);
}
