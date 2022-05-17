const getYearMonthDay=(date)=>{
  let year=date.getFullYear();
  let month=date.getMonth();
  let day=date.getDate();
  return {year,month,day}
}

const getDate=(year,month,day)=>{
  return new Date(year,month,day)
}

// 返回项目路径
const getNormalPath= (p) =>{
  if (p.length === 0 || !p || p == 'undefined') {
    return p
  };
  let res = p.replace('//', '/')
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res;
}


export {
  getYearMonthDay,getDate,getNormalPath
}

