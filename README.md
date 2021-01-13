# clappr-appraise-star

```
<script type="text/javascript" src="./js/clappr-appraise-star.js"></script>
```

```
 var player = new Clappr.Player({
    source: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HelloWorld.svg/512px-HelloWorld.svg.png",
    parentId: "#player",
    hideMediaControl: false,
    plugins: [AppraiseStar.default],
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
		callbackFn: function (starObj, successCallback, errorCallback) {
		    console.log(starObj);

		    successCallback();
		}
    },
  });
```