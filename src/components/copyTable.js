import React, { Component } from 'react';
import { message } from 'antd';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {};
// }
//
// function mapDispatchToProps(dispatch) {
//   return {};
// }

class CopyTable extends Component {
  constructor(props) {
    super(props);
    this.myTableRef = [];
    this.state = {};
  }

  // 复制表格
  myTableForCopy = index => {
    // event.nativeEvent.stopImmediatePropagation();
    this.copyToClipboard(this.myTableRef[index].innerHTML);
  };
  copyToClipboard = str => {
    if (document.execCommand) {
      document.addEventListener(
        'copy',
        event => {
          event.clipboardData.setData('text/html', str);
          event.preventDefault();
        },
        false
      );
      document.execCommand('copy');
      message.success('成功复制表格到到剪贴板!', 1, () => {
        document.addEventListener(
          'copy',
          event => {
            event.clipboardData.clearData('text/html');
            const selectionText = window.getSelection().toString();
            event.clipboardData.setData('text/plain', selectionText);
          },
          false
        );
      });
    } else {
      message.success('该浏览器不支持点击复制到剪贴板!');
    }
  };

  render() {
    const tableData = [
      {
        tableId: 1,
        tableText:
          '<table style=\'border-collapse:"collapse"; width:"100%"\'> <tr> <td colspan="1" rowspan="1" style="border:1px solid #000">2019财政收支情况</td> <td colspan="1" rowspan="1" style="border:1px solid #000">总收入</td> <td colspan="1" rowspan="1" style="border:1px solid #000">总支出</td> </tr> </table>'
      },
      {
        tableId: 2,
        tableText:
          '<table style=\'border-collapse:"collapse"; width:"100%"\'> <tr> <td colspan="1" rowspan="1" style="border:1px solid #000">2020年预算</td> <td colspan="1" rowspan="1" style="border:1px solid #000">总收入</td> <td colspan="1" rowspan="1" style="border:1px solid #000">总支出</td> </tr> </table>'
      }
    ];
    return (
      <div>
        {tableData.map((item, index) => {
          return (
            <div key={item.tableId}>
              <div
                className="copyTable"
                onClick={() => this.myTableForCopy(index)}
              >
                <span></span>复制表格
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: item.tableText }}
                ref={ref => (this.myTableRef[index] = ref)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CopyTable);
export default CopyTable;
