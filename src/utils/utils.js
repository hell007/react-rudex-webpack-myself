//将时间戳转换成时间格式
export const formatDate  = (ns) => {
  let d = new Date(ns);
  let m = d.getMonth() + 1;
  let t = d.getDate();
  let h = d.getHours();     
  let min = d.getMinutes();     
  let s = d.getSeconds();  
  if (m < 10) {
    m = '0' + m.toString()
  }
  if (t < 10) {
    t = '0' + t.toString()
  }
  let str = d.getFullYear().toString() + "-" + m + "-" + t + " " + h + ":" + min + ":" + s;
  return str
}

//时间格式(2014-02-02 14:10:00)转换成时间戳
export const formatTimestamp = (date) => {
  var arr = date.replace(/:/g,"-").replace(/ /g,"-").split("-");
  var timestamp = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
  return timestamp.getTime();
}

//对象是否为空
export const isEmptyObject = obj => {
  for (var key in obj) {
    return false;
  }
  return true;
}

