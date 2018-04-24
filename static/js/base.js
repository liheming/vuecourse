var vercode = getVersionCode();

function getDomainName() {
    // return 'http://192.168.0.129:8080/'; //本地测试
    return 'http://www.wyuetec.com/';
}

function getUserId() {
    return localStorage.userid;
    //   if (mui.os.wechat) {
    //       // alert("微信");
    //      return localStorage.userid;
    //   }else {
    //
    //       // alert("不是微信");
    //      return 'o4AOi1JRAUDzU5e9-MC-RuCirdCQ'; // 胜圣userId
    //   }

    // if (uId != null) {
    // } else {
    // }
}

/**
 * 获取版本号
 */
function getVersionCode() {
    var versionCode = '201803151832';
    return versionCode;
}

// // 微信支付
// function wxPayConfig(productsId) {
//
//     console.log("立即微信支付" + productsId);
//     $.ajax({
//         url: 'http://www.wyuetec.com/wycms/wx/wxConfig',
//         type: 'post',
//         data: {
//             'appKey': 'sandaoyun',
//             'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
//             'url': encodeURIComponent(location.href.split('#')[0])
//         },
//         dataType: 'json',
//         success: function (result) {
//             if (result.code == 200) {
//                 var data = JSON.parse(result.data);
//
//                 wx.config({
//                     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//                     appId: data.appId, // 必填，公众号的唯一标识
//                     timestamp: data.timestamp, // 必填，生成签名的时间戳
//                     nonceStr: data.nonceStr, // 必填，生成签名的随机串
//                     signature: data.signature, // 必填，签名
//                     jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
//                 });
//
//                 chooseWXPay(
//                     'sandaoyun',
//                     '59CCE180FFAC49C8FF97DE2A0A08C119',
//                     '100001',
//                     productsId
//                 );
//             }
//         },
//         error: function () {
//             alert("发起支付异常，请重试！");
//         }
//     });
// }
//
//
// function chooseWXPay(appKey, sign, cpid, productsId) {
//
//     $.ajax({
//         url: 'http://www.wyuetec.com/wycms/wx/pay',
//         type: 'post',
//         data: {
//             'appKey': appKey,
//             'sign': sign,
//             'userid': getUserId(),
//             'cpid': cpid,
//             'productsId': productsId
//         },
//         dataType: 'json',
//         success: function (result) {
//             if (result.code == 200) {
//                 var data = JSON.parse(result.data);
//
//                 wx.chooseWXPay({
//                     timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
//                     nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
//                     package: data.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
//                     signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
//                     paySign: data.paySign, // 支付签名
//                     success: function (res) {
//                         if (res.errMsg == "chooseWXPay:ok") {
//                             vmcontent.content.hasBuy = true;
//                             vmcontent.subsuccess = true;
//                             vmcontent.sub = false;
//                             vmcontent.subfail = false;
// //                                alert("支付成功");
//                         } else {
//                             vmcontent.subsuccess = false;
//                             vmcontent.sub = false;
//                             vmcontent.subfail = true;
//                         }
//                     },
//                     cancel: function (res) {
//
//                     },
//                     fail: function (res) {
//                         vmcontent.subsuccess = false;
//                         vmcontent.sub = false;
//                         vmcontent.subfail = true;
//                     },
//                     complete: function (res) {
//
//                     }
//                 });
//             }
//         },
//     });
// }

//
// function getContent(id) {
//     //    获取列表
//     $.ajax({
//         url: 'http://www.wyuetec.com/wycms/selling/products/content',
//         type: 'post',
//         data: {
//             'appKey': 'sandaoyun',
//             'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
//             'productsId': id
//         },
//         dataType: 'json',
//         success: function (result) {
//             console.log(result);
//
//             if (result.code == 200) {
//                 console.log("200");
//                 return JSON.parse(result.data);
//
//             } else {
//                 return null;
//                 console.log("err");
//             }
//         },
//         error: function () {
//             return null;
//         }
//     });
// }

// // 查询是否已经订阅该课程
// function hasOrder(productCode) {
//     console.log(productCode);
//     $.ajax({
//         url: 'http://www.wyuetec.com/wycms/wechat/orders/hasOrder',
//         type: 'post',
//         data: {
//             'appKey': 'sandaoyun',
//             'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
//             'channelid': '100001',
//             'userid': userid,
//             'productCode': productCode
//         },
//         dataType: 'json',
//         success: function (result) {
//             console.log(result);
//
//             if (result.code == 200) {
//                 console.log("200");
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         error: function () {
//             return false;
//         }
//     });
//
// }


/**
 * 打开内容详情页
 * @param {Object} contentId
 * @param {Object} exdata 自定义扩展参数
 */
function openContentDetail(contentId, exdata) {
    if (!exdata) {
        exdata = 'mui';
    }

    mui.openWindow({
        id: contentId,
        url: "content-details.html?ver=" + vercode + "&id=" + contentId,
        extras: {
            name: exdata //自定义扩展参数，可以用来处理页面间传值
        },
        show: {
            autoShow: false
        },
        waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: '正在加载...' //等待对话框上显示的提示内容
        }
    })
}



/**
 * 打开播放页
 * @param {Object} productsId
 * @param {Object} contentId
 * @param {Object} type
 * @param {Object} exdata 自定义扩展参数
 */
function openPlayPage(productsId, contentId, type, exdata) {
    if (!exdata) {
        exdata = 'mui';
    }

    addCollection(contentId, type);

    mui.openWindow({
        id: "",
        url: "content-play.html?ver=" + vercode + "&id=" + productsId+ "&contentId=" + contentId,
        extras: {
            name: 'mui' //自定义扩展参数，可以用来处理页面间传值
        },

        show: {
            autoShow: false
        },
        waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: '正在加载...', //等待对话框上显示的提示内容
        }
    })
}

// todo  修改
//视频集/音频集增加播放量接口 type 内容类型1视频集 , 3音频集
function addCollection(contentId, type) {
    $.ajax({
        url: 'http://www.wyuetec.com/wycms/user/center/history/addCollection',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'contentid': contentId,
            'type': type
        },
        dataType: 'json',
        success: function (result) {
            if (result.code == 200) {
                console.log("200");
            }
        },
        error: function () {
            console.log("fail");
        }
    });
}


/**
 * 打开首页
 */


/**
 * 收費或者免費
 */
function openPayOFree(freeOrPay) {
    mui.openWindow({
        url: 'free.html?ver=' + vercode + "&freeOrPay=" + freeOrPay,
    });
}


/**
 * 关注我们
 */
function openFollow() {
    mui.openWindow({
        url: 'followUs.html?ver=' + vercode,
    });
}
/**
 * 关注我们
 */
function openTopicPage(topicid,topicType,topPicture,topicDesc) {
    mui.openWindow({
        url: 'special-topic.html?ver=' + vercode+'&topicid='+topicid+'&topicType='+topicType+'&topPicture='+topPicture+'&topicDesc='+topicDesc
    });
}


function openHomePage(type) {
    mui.openWindow({
        url: "index.html?index=0&ver=" + vercode+"&type="+type,
        waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: '正在加载...' //等待对话框上显示的提示内容
        }
    })
}

/**
 * 打开首页
 */
function openIndex() {
    mui.openWindow({
        url: "index.html?index=0&ver=" + vercode
    });
}

function openMyComment() {
    mui.openWindow({
        url: 'my-comment.html?ver=' + vercode
    });
}


function openRanking() {
    mui.openWindow({
        url: 'ranking.html?ver=' + vercode
    });
}

//my-collent
function openMyCollent() {
    mui.openWindow({
        url: 'my-collent.html?ver=' + vercode
    });
}

//buy-record
function openBuyRecord() {
    mui.openWindow({
        url: 'buy-record.html?ver=' + vercode,
    });
}
