
let diemtoan = prompt('diem ly');
let diemly  = prompt('diem hoa');
let diemhoa = prompt('diem sinh');
let diemtb = (Number(diemly) + Number(diemhoa) + Number(diemsinh)) / 3;
alert("diem trung binh:" + diemtb);
console.log(diemhoa);
document.write(diemtb.toFixed(1));