const disposition = res.headers['content-disposition'];
if (disposition) {
  const fileName = decodeURI(disposition.split('=')[1].replace(/\'/g, ''));
  const blob = new Blob([res.data]);
  const downloadElement = document.createElement('a');
  const href = URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download = fileName; // 下载后文件名
  document.body.appendChild(downloadElement); // 追加a标签
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  URL.revokeObjectURL(href); // 释放掉blob对象
}
