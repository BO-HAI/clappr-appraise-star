import { Events, Styler, UICorePlugin, template } from 'clappr';
import pluginHtml from './template/appraise-star.html'
import pluginStyle from './template/style.scss'

export default class AppraiseStar extends UICorePlugin {
    static get version() { return VERSION }
    static get cid() { return 'c2' }

    get name() { return 'appraise_star' }
    get template() { return template(pluginHtml) }


    get attributes() {
        return {
          'class': this.name,
          'data-appraise-star-selet': ''
        }
      }

    get events() {
        return {
          'click .appraise-star-wrap': 'onShowAppraiseStar',
        }
      }

    bindEvents() {
        // 核心准备完毕
        this.listenTo(this.core, Events.CORE_READY, this.bindPlaybackEvents)
        // 媒体控件渲染
        this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.render)
        // 媒体控件隐藏时触发
        this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_HIDE, this.hideAppraiseStar)
    }

    onShowAppraiseStar() {
        this.$el.find('.appraise-star-content').show();
    }

    hideAppraiseStar() {
        this.$el.find('.appraise-star-content').hide();
        this.$el.find('.appraise-star--error').removeClass('active');
        this.$el.find('.appraise-star--success').removeClass('active');
    }

    /**
     * 设置星星及交互
     *
     * @param {*} $el
     * @param {*} index
     * @memberof AppraiseStar
     */
    setStar($el, index) {
        let that = this;
        let name = $el.data('name');
        let isPass = true;

        // 设置星星
        $el.find('.appraise-star--star').each(function (i, item) {
            if (i < index) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }
        });

        that.core.options.appraiseStarConfig.starObj.forEach((item) => {
            if (item.name === name) {
                item.star = index;
            }

            // isPass = true (如果isPass已经是false, 无需再次判断, 避免下一项覆盖) 
            if (isPass && item.star < 1) {
                isPass = false;
            }
        });

        if (isPass) {
            that.$el.find('.appraise-star--submit').addClass('active');
        }
    }

    errorCallback(info) {
        if (!info) {
            info = this.core.options.appraiseStarConfig.errorInfo; 
        }
        this.$el.find('.appraise-star--submit').removeClass('loading').text('').addClass('err');
        this.$el.find('.appraise-star--error').text(info).addClass('active'); 
        
        let timer = setTimeout(() => {
            clearTimeout(timer);
            this.$el.find('.appraise-star--submit').removeClass('err');
        }, 2000);

        let timer2 = setTimeout(() => {
            clearTimeout(timer2);
            this.$el.find('.appraise-star--submit').text(this.core.options.appraiseStarConfig.submitButtonText);
        }, 2200);
    }

    successCallback(info) {
        if (!info) {
            info = this.core.options.appraiseStarConfig.successInfo; 
        }
        this.$el.find('.appraise-star--submit').removeClass('loading').text('').addClass('over');
        this.$el.find('.appraise-star--success').text(info).addClass('active');    
    }
    

    render() {
        let that = this;
        let style = Styler.getStyleFor(pluginStyle, { baseUrl: this.core.options.baseUrl })
        this.$el.append(style)
        this.$el.html(this.template(this.core.options.appraiseStarConfig))
        this.core.mediaControl.$('.media-control-right-panel').append(this.el)

        this.$el.find('.appraise-star--star').on('click', function () {
            let $this = $(this)
            let index = $this.data('index');
            that.setStar($this.parent(), index);
        });

        this.$el.find('.appraise-star-wrap').mouseenter(() => {
            this.onShowAppraiseStar();
        })

        this.$el.find('.appraise-star-wrap').mouseleave(() => {
            this.hideAppraiseStar();
        });

        this.$el.find('.appraise-star--submit').on('click', function () {
            let $this = $(this);

            if ($this.hasClass('over') || $this.hasClass('err')) {
                return;
            }

            if ($this.hasClass('active')) {
                $this.addClass('loading');
                that.core.options.appraiseStarConfig.callbackFn(that.core.options.appraiseStarConfig.starObj, that.successCallback.bind(that), that.errorCallback.bind(that));
            }
        });
        return this
    }
}