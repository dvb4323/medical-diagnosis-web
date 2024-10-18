document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Lấy các giá trị từ form
  const duongUre = parseFloat(
    document.querySelector('input[name="duong_ure"]').value
  );
  const duongGlucose = parseFloat(
    document.querySelector('input[name="duong_glucose"]').value
  );
  const duongCreatinine = parseFloat(
    document.querySelector('input[name="duong_creatinine"]').value
  );
  const duongAcidUric = parseFloat(
    document.querySelector('input[name="duong_acid_uric"]').value
  );

  let result = ""; // Store diagnostic result

  // Điều kiện chẩn đoán
  if (duongUre < 1.7 || duongUre > 8.3) {
    result += "Chỉ số Ure bất thường. ";
  } else {
    result += "Chỉ số Ure bình thường. ";
  }

  if (duongGlucose < 4.1 || duongGlucose > 6.7) {
    result += "Chỉ số Glucose bất thường. ";
  } else {
    result += "Chỉ số Glucose bình thường. ";
  }

  if (duongCreatinine < 62 || duongCreatinine > 106) {
    result += "Chỉ số Creatinine bất thường. ";
  } else {
    result += "Chỉ số Creatinine bình thường. ";
  }

  if (duongAcidUric < 180 || duongAcidUric > 420) {
    result += "Chỉ số Acid Uric bất thường. ";
  } else {
    result += "Chỉ số Acid Uric bình thường. ";
  }

  // Hiển thị kết quả chẩn đoán
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = result; // Insert the result text into the div
});
