(function () {
  'use strict';

  new Vue({
    el: '#app',
    data: {
      remainedPanelsInput: 0,
      filledPanels: 0,
      perPanel: 0,
      resultShow: false,
      alertShow: false,
    },
    watch: {
      remainedPanelsInput: {
        handler: function () {
          localStorage.setItem('remainedPanelsInput', JSON.stringify(this.remainedPanelsInput));
        },
        deep: true
      },
      filledPanels: {
        handler: function () {
          localStorage.setItem('filledPanels', JSON.stringify(this.filledPanels));
        },
        deep: true
      },
      perPanel: {
        handler: function () {
          localStorage.setItem('perPanel', JSON.stringify(this.perPanel));
        },
        deep: true
      },
    },
    methods: {
      resultShowFunc: function () {
        if (this.remainedPanelsInput === 0) {
          this.alertShow = true;
        } else {
          this.resultShow = true;
          this.alertShow = false;
        }
      },
      panelFinished: function () {
        this.filledPanels++;
      },
      panelReturn: function () {
        this.filledPanels--;
      },
      resultReset: function () {
        this.remainedPanelsInput = 0;
        this.filledPanels = 0;
        this.perPanel = 0;
        this.resultShow = false;
      },
    },
    computed: {
      remainedPanelsNumber: function () {
        return this.remainedPanelsInput - this.filledPanels;
      },
      remainingTime: function () {
        return this.remainedPanelsNumber * this.perPanel;
      },
      remainingHour: function () {
        return Math.round((this.remainingTime / 60) * 10) / 10;
      },
    },
    mounted: function () {
      this.remainedPanelsInput = JSON.parse(localStorage.getItem('remainedPanelsInput')) || 0;
      this.filledPanels = JSON.parse(localStorage.getItem('filledPanels')) || 0;
      this.perPanel = JSON.parse(localStorage.getItem('perPanel')) || 0;
      if (this.remainedPanelsInput > 0) {
        this.resultShow = true
      }
    },
  })


  // twitter投稿
  !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');
})();
