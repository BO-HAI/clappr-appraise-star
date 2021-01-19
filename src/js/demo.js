
var HelloWorld = Clappr.UIContainerPlugin.extend({
    name: 'hello_world',
    initialize: function() {
      this.render();
    },
    bindEvents: function() {
      this.listenTo(this.container, Clappr.Events.CONTAINER_PAUSE, this.show);
      this.listenTo(this.container, Clappr.Events.CONTAINER_PLAY, this.hide);
    },
    hide: function() {
      this.$el.hide();
    },
    show: function() {
      this.$el.show();
    },
    render: function() {
      this.$el.html('Hello World!');
      this.$el.css('font-size', '100px');
      this.$el.css('color', 'white');
      this.$el.css('background-color', 'red');
      this.$el.css('position', 'relative');
      this.container.$el.append(this.$el);
      this.hide();
      return this;
    }
  });
  var player = new Clappr.Player({
    source: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HelloWorld.svg/512px-HelloWorld.svg.png",
    parentId: "#player",
    hideMediaControl: false,
    plugins: [HelloWorld, AppraiseStar, PlaybackRatePlugin],
    appraiseStarConfig: {
		  buttonText: 'evaluation',
		icon: '',
		title: 'Video evaluation',
		detailLink: 'http://v.hqwx.com/uc/goods/comment?buyType=3&orderId=32144156&gid=77036&pid=57334&oname=%E5%BB%BA%E7%AD%91%E6%9E%84%E9%80%A0%E8%A6%81%E6%B1%82&otype=1&oid=85398',
		submitButtonText: 'submit',
		errorInfo: '您的评价对我们很重要',
		successInfo: '提交成功',
		starObj: [
			{
				id: 0,
				name: 'evaluation1',
				star: 0 // 默认星
			},
			{
				id: 1,
				name: 'evaluation2',
				star: 0
			}
		],
		defaultStatus: 0,  // 设置一个默认状态: 1 已提交过, 0 正常
		callbackFn: function (starObj, successCallback, errorCallback) {
			console.log(starObj);
			setTimeout(function () {
				successCallback();
			}, 2000);
		}
    },
    //调整播放速度
    playbackRateConfig: {
        defaultValue: '1.0',
        options: [{
            value: '0.8',
            label: '0.8x'
        }, {
            value: '1.0',
            label: '1.0x'
        }, {
            value: '1.2',
            label: '1.2x'
        }, {
            value: '1.3',
            label: '1.3x'
        }, {
            value: '1.5',
            label: '1.5x'
        }, {
            value: '2.0',
            label: '2.0x'
        }]
    }
  });