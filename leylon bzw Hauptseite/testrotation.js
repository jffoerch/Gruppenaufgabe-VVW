function stopRotation(id, finalNumber) {
    const element = document.getElementById(id);
    element.style.animation = "none"; // Stoppt die Animation
    element.textContent = finalNumber; // Setzt die endgültige Zahl
  }

  // Zufällige Rotation für 3 Sekunden, dann auf bestimmter Zahl stoppen
  setTimeout(() => stopRotation('num1', 1), 5000);
  setTimeout(() => stopRotation('num2', 9), 5500);
  setTimeout(() => stopRotation('num3', 9), 5200);
  setTimeout(() => stopRotation('num4', 6), 6000);
  
  setTimeout(() => stopRotation('num5', 9), 5000);
  setTimeout(() => stopRotation('num6', 9), 5500);
  setTimeout(() => stopRotation('num7', 3), 5000);
  
  setTimeout(() => stopRotation('num8', "T"), 5800);
  setTimeout(() => stopRotation('num9', "U"), 6000);
  setTimeout(() => stopRotation('num10', "R"), 6120);
  setTimeout(() => stopRotation('num11', "B"), 5820);
  setTimeout(() => stopRotation('num12', "O"), 5300);
  
  setTimeout(() => stopRotation('num13', 4), 6000);
  setTimeout(() => stopRotation('num14', 5), 5800);
  setTimeout(() => stopRotation('num15', 0), 5200);
