document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Lấy các giá trị từ form
  const duongUreInput = document.querySelector('input[name="duong_ure"]');
  const duongGlucoseInput = document.querySelector(
    'input[name="duong_glucose"]'
  );
  const duongCreatinineInput = document.querySelector(
    'input[name="duong_creatinine"]'
  );
  const duongAcidUricInput = document.querySelector(
    'input[name="duong_acid_uric"]'
  );

  const duongUre = parseFloat(duongUreInput.value);
  const duongGlucose = parseFloat(duongGlucoseInput.value);
  const duongCreatinine = parseFloat(duongCreatinineInput.value);
  const duongAcidUric = parseFloat(duongAcidUricInput.value);

  let result = ""; // Store diagnostic result

  // Reset all input background colors first
  duongUreInput.style.backgroundColor = "";
  duongGlucoseInput.style.backgroundColor = "";
  duongCreatinineInput.style.backgroundColor = "";
  duongAcidUricInput.style.backgroundColor = "";

  // Điều kiện chẩn đoán và thay đổi màu
  if (duongUre < 1.7) {
    result += "Chỉ số Ure thấp hơn bình thường. ";
    duongUreInput.style.backgroundColor = "blue"; // Lower than the minimum
  } else if (duongUre > 8.3) {
    result += "Chỉ số Ure cao hơn bình thường. ";
    duongUreInput.style.backgroundColor = "red"; // Higher than the maximum
  } else {
    result += "Chỉ số Ure bình thường. ";
  }

  if (duongGlucose < 4.1) {
    result += "Chỉ số Glucose thấp hơn bình thường. ";
    duongGlucoseInput.style.backgroundColor = "blue"; // Lower than the minimum
  } else if (duongGlucose > 6.7) {
    result += "Chỉ số Glucose cao hơn bình thường. ";
    duongGlucoseInput.style.backgroundColor = "red"; // Higher than the maximum
  } else {
    result += "Chỉ số Glucose bình thường. ";
  }

  if (duongCreatinine < 62) {
    result += "Chỉ số Creatinine thấp hơn bình thường. ";
    duongCreatinineInput.style.backgroundColor = "blue"; // Lower than the minimum
  } else if (duongCreatinine > 106) {
    result += "Chỉ số Creatinine cao hơn bình thường. ";
    duongCreatinineInput.style.backgroundColor = "red"; // Higher than the maximum
  } else {
    result += "Chỉ số Creatinine bình thường. ";
  }

  if (duongAcidUric < 180) {
    result += "Chỉ số Acid Uric thấp hơn bình thường. ";
    duongAcidUricInput.style.backgroundColor = "blue"; // Lower than the minimum
  } else if (duongAcidUric > 420) {
    result += "Chỉ số Acid Uric cao hơn bình thường. ";
    duongAcidUricInput.style.backgroundColor = "red"; // Higher than the maximum
  } else {
    result += "Chỉ số Acid Uric bình thường. ";
  }

  // Hiển thị kết quả chẩn đoán
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = result; // Insert the result text into the div
});
