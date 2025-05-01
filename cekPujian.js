const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  function getPujian(nilai) {
    if (isNaN(nilai)) {
      return 'Input tidak valid. Harap masukkan angka.';
    } else if (nilai > 100 || nilai < 0) {
       return 'Nilai di luar rentang yang valid (0-100).';
    } else if (nilai >= 85) { 
      return 'Istimewa';
    } else if (nilai >= 80) { 
      return 'Sangat baik';
    } else if (nilai >= 75) { 
      return 'Lebih baik';
    } else if (nilai >= 70) { 
      return 'Baik';
    } else if (nilai >= 65) { 
      return 'Cukup baik';
    } else if (nilai >= 60) { 
      return 'Lebih dari cukup'; 
    } else if (nilai >= 55) { 
      return 'Cukup';
    } else if (nilai >= 50) { 
      return 'Kurang';
    } else { 
      return 'Gagal';
    }
  }
  
  
  readline.question('Masukkan nilai: ', (nilaiInput) => {
    
    const nilai = parseFloat(nilaiInput);
  
  
    const pujian = getPujian(nilai);

    console.log(`Pujian : ${pujian}`);
  
    
    readline.close();
  });