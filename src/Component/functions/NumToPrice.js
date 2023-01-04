const numToPrice = (num) => {
    let str = String(num);
    let len = str.length;
    if (len < 3) return str
    else if (len < 7) {
      str = str.slice(0, -3) + ',' + str.slice(-3)
      return str
    }
    else {
      str = str.slice(0, -6) + ',' + str.slice(-6, -3) + ',' + str.slice(-3)
      return str
    };
  }
  
  // 👇️ default export (next line)
  export default numToPrice;