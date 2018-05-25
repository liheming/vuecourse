var userid = localStorage.userid;
//var hostUrl = 'http://192.168.0.114:8180/wycms/';
var hostUrl = 'http://www.wyuetec.com/wycms/';
var localUrl = 'http://192.168.0.129:8080/wycms/';

// if (!mui.os.wechat) {
 userid = "o4AOi1JRAUDzU5e9-MC-RuCirdCQ";
//     mui.openWindow({
//     	id: "三道云课堂",
//     	url: "followUs.html",
//     	extras: {
//     		name: 'mui' //自定义扩展参数，可以用来处理页面间传值
//     	},
//     	show: {
//     		autoShow: false
//     	},
//     	waiting: {
//     		autoShow: true, //自动显示等待框，默认为true
//     		title: '正在加载...' //等待对话框上显示的提示内容
//     	}
//     });
// }

var vm;
var index = 0;
var type = 0;

/**
 * index页面onload初始化
 */
function onLoadByIndex() {
    index = getQueryString("index");
    type = getQueryString("type");
    if (!index) {
        index = 0;
    }
    if (!type) {
        type = 0;
    }
    queryUserInfo();
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 获取用户信息
 */
function queryUserInfo() {
    var code = getQueryString("code");

    if (userid) {
        //userid获取用户信息
        $.ajax({
            url: hostUrl + 'wechat/wxuser/queryUserInfoByUserId',
            type: 'post',
            data: {
                'appKey': 'sandaoyun',
                'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
                'userid': userid
            },
            dataType: 'json',
            success: function (result) {
                if (result.code == 200) {
                    var data = JSON.parse(result.data);

                    if (data) {
                        userid = data.openid;
                        //保存数据到本地
                        localStorage.userid = userid;

                        setUserInfo(data);

                        //						initData();
                    }
                }
            }
        });
    } else {
        //code获取用户信息
        $.ajax({
            url: hostUrl + 'wechat/wxuser/queryUserInfoByCode',
            type: 'post',
            data: {
                'appKey': 'sandaoyun',
                'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
                'code': code
            },
            dataType: 'json',
            success: function (result) {
                if (result.code == 200) {
                    var data = JSON.parse(result.data);

                    if (data) {
                        userid = data.openid;
                        //保存数据到本地
                        localStorage.userid = userid;

                        setUserInfo(data);

                        //						initData();
                    }
                }
            },
        });
    }
}

/**
 * 获取用户头像和昵称
 */
function getUserData() {
    var code = getQueryString("code");

    if (userid) {
        //userid获取用户信息
        $.ajax({
            url: hostUrl + 'wechat/wxuser/queryUserInfoByUserId',
            type: 'post',
            data: {
                'appKey': 'sandaoyun',
                'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
                'userid': userid
            },
            dataType: 'json',
            success: function (result) {
                if (result.code == 200) {
                    var data = JSON.parse(result.data);

                    if (data) {
                        userid = data.openid;
                        //保存数据到本地
                        localStorage.userid = userid;

                        setUserInfo(data);
                    }
                }
            },
        });
    } else {
        //code获取用户信息
        $.ajax({
            url: hostUrl + 'wechat/wxuser/queryUserInfoByCode',
            type: 'post',
            data: {
                'appKey': 'sandaoyun',
                'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
                'code': code
            },
            dataType: 'json',
            success: function (result) {
                if (result.code == 200) {
                    var data = JSON.parse(result.data);

                    if (data) {
                        userid = data.openid;
                        //保存数据到本地
                        localStorage.userid = userid;

                        setUserInfo(data);
                    }
                }
            },
        });
    }
}

/**
 * 获取链接中的参数值
 * @param {Object} name 参数名
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);

    return null;
}

function setUserInfo(data) {
    var userHead = document.getElementById("userHead");
    var nickName = document.getElementById("nickName");

    if (userHead && nickName) {
        document.getElementById("userHead").src = data.headimgurl;
        document.getElementById("nickName").innerHTML = data.nickname;
    }
}

function initData() {
    mui.init({
        swipeBack: true //关闭右滑关闭功能
    });

    //创建实例
    vm = new Vue({
        el: '#app',

        data: {
            rankType: '1',
            isShow: false,
            freeIsShow: false,
            rankIsShow: false,
            data: null,
            topicData: null,
            topicLargeData: null,
            freeData: null,
            rankData: null,
            subdata: null,
            weekdata: null,
            longtimedata: null,
            isMineShow: false,
            isPlayShow: false,
            imageurl: 'images/muwu.jpg'
        },
        methods: {


            removeAd: function () {
                var container = document.getElementById("content");
                container.removeChild(container.firstElementChild);
            },
            openIndex: function () {
                //              mui.openWindow({
                //                  url: 'home.html?home=0'
                //              });
                openHomePage();
            },
            openPerson: function () {
                mui.openWindow({
                    url: '#'
                });
            },
            openFollow: function () {
                //              mui.openWindow({
                //                  url: 'followUs.html'
                //              });
                openFollow();
            },
            openDetailsPage: function (id) {
                //              mui.openWindow({
                //                  id: "1321",
                //                  url: "content-details.html?id=" + id,
                //                  extras: {
                //                      name: 'mui' //自定义扩展参数，可以用来处理页面间传值
                //                  },
                //                  show: {
                //                      autoShow: false
                //                  },
                //                  waiting: {
                //                      autoShow: true, //自动显示等待框，默认为true
                //                      title: '正在加载...', //等待对话框上显示的提示内容
                //                  }
                //              })
                openContentDetail(id);
            },
            openPlayPage: function (productsId, contentId, type) {
                //              addCollection(contentId, type);
                //              mui.openWindow({
                //                  id: "三道云课堂",
                //                  url: "content-play.html?id=" + productsId,
                //                  extras: {
                //                      name: 'mui' //自定义扩展参数，可以用来处理页面间传值
                //                  },
                //                  show: {
                //                      autoShow: false
                //                  },
                //                  waiting: {
                //                      autoShow: true, //自动显示等待框，默认为true
                //                      title: '正在加载...', //等待对话框上显示的提示内容
                //                  }
                //              })
                openPlayPage(productsId, contentId, type);
            },
            queryUserInfo: function () {
                queryUserInfo();
            },
            toastMsg: function () {
                alert('正在升级，敬请期待');
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    });

    getData();
    onTabChange(index, type);
}

/**
 * Tab页
 * @param index
 */
function onTabChange(index, type) {
    vm.index = index;


// 跳往推荐的排行
    if (type == 3) {

        getRanking('1');
        $("#tab-recommend").removeClass("mui-active");
        $("#recommend").removeClass("mui-active");
        $("#tab-ranking").addClass("mui-active");
        $("#ranking").addClass("mui-active");

    }


    //首页
    var tabHome = document.getElementById("tabHome");
    var tabbar = document.getElementById("tabbar");
    //继续学习
    var tabStudy = document.getElementById("tabStudy");
    var continuestudy = document.getElementById("continue-study");
    //个人中心
    var personCenterClick = document.getElementById("personCenterClick");
    var tabbarcontact = document.getElementById("tabbar-with-contact");

	var homeimg = document.getElementById('home-home-img');
	var learnimg = document.getElementById('home-learn-img');
	var centerimg = document.getElementById('home-center-img')

    //根据index切换tab页的样式
    if (index == 0) {
        if (tabHome && tabbar && homeimg) {
            tabHome.className = 'mui-tab-item mui-active';
            tabbar.className = 'mui-control-content mui-active';
            homeimg.src = 'images/home-home-ok.png';
        }

        if (tabStudy && continuestudy && learnimg) {
            tabStudy.className = 'mui-tab-item';
            continuestudy.className = 'mui-control-content';
            learnimg.src = 'images/home-book.png';
        }

        if (personCenterClick && tabbarcontact) {
            personCenterClick.className = 'mui-tab-item';
            tabbarcontact.className = 'mui-control-content';
            centerimg.src = 'images/home-head.png';
        }
    } else if (index == 1) {
        if (tabHome && tabbar && homeimg) {
            tabHome.className = 'mui-tab-item';
            tabbar.className = 'mui-control-content';
            homeimg.src = 'images/home-home.png';
        }

        if (tabStudy && continuestudy && learnimg) {
            tabStudy.className = 'mui-tab-item mui-active';
            continuestudy.className = 'mui-control-content mui-active';
            learnimg.src = 'images/home-book-ok.png';
        }

        if (personCenterClick && tabbarcontact && centerimg) {
            personCenterClick.className = 'mui-tab-item';
            tabbarcontact.className = 'mui-control-content';
            centerimg.src = 'images/home-head.png';
        }

        //获取数据
        getOneWeek();
        getEarlier();
        getOrdersRecord();
    } else if (index == 2) {
        if (tabHome && tabbar && homeimg) {
            tabHome.className = 'mui-tab-item';
            tabbar.className = 'mui-control-content';
            homeimg.src = 'images/home-home.png';
        }

        if (tabStudy && continuestudy && learnimg) {
            tabStudy.className = 'mui-tab-item';
            continuestudy.className = 'mui-control-content';
            learnimg.src = 'images/home-book.png';
        }

        if (personCenterClick && tabbarcontact && centerimg) {
            personCenterClick.className = 'mui-tab-item mui-active';
            tabbarcontact.className = 'mui-control-content mui-active';
            centerimg.src = 'images/home-head-ok.png';
        }
    }
}


/**
 * 获取榜单数据
 * @param type 榜单类型 '1' ,'2' ,'3' ,'4' ,（String）
 */
function getRanking(type) {
    $.ajax({
        url: hostUrl+'selling/products/rankList',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'channelCode': '100001',
            'rankType': type
        },
        dataType: 'json',
        success: function (result) {
            console.log(result);
            if (result.code == 200) {
                console.log("200");
                vm.rankData = JSON.parse(result.data);
                vm.rankType = type;
                vm.rankIsShow = true;
            } else {
            }
        },
        error: function () {
        }
    });
}


/**
 * 获取免费和付费数据
 * @param freeOrPay 1 免费， 0 付费
 * @param newOrHot 1 最新， 2 最热
 */
function payOrFree(freeOrPay, newOrHot) {

    $.ajax({
//            url: 'http://192.168.0.114:8180/wycms/selling/products/payOrFree',
        url: hostUrl+'selling/products/payOrFree',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'channelCode': '100001',
            'isfree': freeOrPay,
            'newOrHot': newOrHot
        },
        dataType: 'json',
        success: function (result) {
            console.log(result);

            if (result.code == 200) {
                console.log("200");
                vm.freeData = JSON.parse(result.data);
                vm.freeIsShow = true;
            } else {
            }
        },
        error: function () {
        }
    });
}


function getData() {
    getTopic(1);
    getTopic(2);
    getHotList();

    //	getOneWeek();
    //	getEarlier();
    //	getOrdersRecord();
}

/**
 * 获取专题列表小图标
 */
function getTopic(that,type) {
    $.ajax({
        url: hostUrl + 'topic/topicList',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'cpid': '100001',
            'type': type
        },
        dataType: 'json',
        success: function (result) {

            if (result.code == 200) {
                if(type == 1){
                vm.topicData = JSON.parse(result.data);
                }
                else {

                vm.topicLargeData = JSON.parse(result.data);
                }
            } else {
                console.log("err");
            }
        },
        error: function () {
        }
    });
}

/**
 * 获取热门推荐
 */
function getHotList() {
    $.ajax({
        url: hostUrl + 'selling/products/home',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'channelCode': '100001'
        },
        dataType: 'json',
        success: function (result) {
            console.log(result);

            if (result.code == 200) {
                console.log("200");
                vm.data = JSON.parse(result.data);
                vm.isShow = true;
            } else {
                console.log("err");
            }
        },
        error: function () {
        }
    });
}


/**
 * 获取一周的播放记录
 */
function getOneWeek() {
    //一周播放数据
    $.ajax({
        url: hostUrl + 'user/center/history/oneWeek',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'cpid': '100001',
            'userid': userid
        },
        dataType: 'json',
        success: function (result) {
            if (result.code == 200) {
                var data = JSON.parse(result.data);
                if (data && data.length != 0) {
                    vm.isPlayShow = true;
                    vm.weekdata = data;
                } else {
                    vm.isPlayShow = false;
                }
            } else {
                vm.isPlayShow = false;
            }
        },
        error: function () {
            vm.isPlayShow = false;
        }
    });
}

/**
 * 获取更早之前的播放记录
 */
function getEarlier() {
    $.ajax({
        url: hostUrl + 'user/center/history/earlier',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'cpid': '100001',
            'userid': userid,
            'pageNum': 1
        },
        dataType: 'json',
        success: function (result) {
            if (result.code == 200) {
                var data = JSON.parse(result.data);
                if (data && data.length != 0) {
                    vm.isPlayShow = true;
                    vm.longtimedata = data;
                } else {
                    if (!vm.isPlayShow) {
                        vm.isPlayShow = false;
                    }
                }
            } else {
                vm.isPlayShow = false;
            }
        },
        error: function () {
            vm.isPlayShow = false;
        }
    });
}

function getOrdersRecord() {
    //获取成功订购数据
    $.ajax({
        url: hostUrl + 'wechat/orders/record',
        type: 'post',
        data: {
            'appKey': 'sandaoyun',
            'sign': '59CCE180FFAC49C8FF97DE2A0A08C119',
            'channelid': '100001',
            'userid': userid,
            'functionType': 1
        },
        dataType: 'json',
        success: function (result) {
            if (result.code == 200) {
                var data = JSON.parse(result.data);
                if (data && data.length != 0) {
                    vm.isMineShow = true;
                    vm.subdata = data;
                } else {
                    vm.isMineShow = false;
                }
            } else {
                vm.isMineShow = false;
            }
        },
        error: function () {
            vm.isMineShow = false;
        }
    });


    function indexHome() {
        alert("home");

    }
}
