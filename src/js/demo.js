
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
    plugins: [HelloWorld, AppraiseStar.default, PlaybackRatePlugin],
    appraiseStarConfig: {
		buttonText: 'evaluation',
		icon: '',
		title: 'Video evaluation',
		link: '',
		errorInfo: '您的评价对我们很重要',
		successInfo: '提交成功',
		starObj: [
			{
				id: 0,
				name: 'evaluation1',
				star: 0
			},
			{
				id: 1,
				name: 'evaluation2',
				star: 0
			}
		],
		callbackFn: function (starObj, success) {
			console.log(starObj);

			success();
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