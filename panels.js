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
