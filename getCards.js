let fileInput = document.getElementById("fileInput");
//값이 변경될때 호출 되는 이벤트 리스너
fileInput.addEventListener('change', function (e) {
    console.log(e.target.files)
})