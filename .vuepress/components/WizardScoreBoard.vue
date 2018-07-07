<template lang="pug">
.container(v-cloak)
  h1.text-center.my-3 神機妙算記分板
  .card.mb-3
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item(v-for="tabName, tabKey in {setting: '設定', input: '記錄', result: '結果'}")
          a.nav-link(href="#", :class="{active: curTab == tabKey}", @click="curTab = tabKey") {{ tabName }}
    table.table.table-striped.table-borderless.mb-0(v-show="curTab == 'setting'")
      tbody
        tr
          td.text-nowrap.text-center.w-1px
            button.btn.btn-sm.btn-outline-secondary.mr-1(type="button", @click="playerAdd") #[span.fa.fa-plus] 玩家
            button.btn.btn-sm.btn-outline-secondary(type="button", @click="playerPop")  #[span.fa.fa-minus] 玩家
          td.py-3 目前玩家人數為 {{ this.players.length }} 人，更改玩家數量將會自動重新開始遊戲，人數限制為 3 人到 6 人。
        tr
          td.text-nowrap.text-center.w-1px
            button.btn.btn-sm.btn-outline-secondary(type="button", @click="gameRestart") #[span.fa.fa-refresh] 重新開始遊戲
          td.py-3 以目前的玩家人數重新開始遊戲。
    table.table.table-striped.table-borderless.text-nowrap.text-center.text-monospace.mb-0(v-if="curTab == 'input' && !!roundMax")
      thead
        tr
          th(colspan="2") {{ `${roundCur + 1}/${roundMax}` }}
          th
            span.pr-2.align-middle 預測
            span.badge.badge-info {{ predictsSum[roundCur] }}
          th
            span.pr-2.align-middle 結果
            span.badge(:class="(resultsSum[roundCur] === roundCur + 1) ? 'badge-success' : 'badge-danger'") {{ resultsSum[roundCur] }}
      tbody
        tr(v-for="player, playerIdx in players")
          td.align-middle.fs-dot8rem(@click="playerRename(player)", :class="playerIdx === dealer ? 'bg-success text-white' : ''") {{ player.name }}
          td.align-middle.fs-dot8rem {{ playersScore[playerIdx] }}
          td.py-2.pl-0
            .input-group.input-group-sm(v-for="round in [ player.rounds[roundCur] ]")
              .input-group-prepend
                button.btn.btn-outline-secondary(type="button", @click="round.result = --round.predict")
                  span.fa.fa-minus
              input.form-control.text-center(type="number", :value="round.predict", @input="round.result =  round.predict = _.parseInt($event.target.value)")
              .input-group-append
                button.btn.btn-outline-secondary(type="button", @click="round.result = ++round.predict")
                  span.fa.fa-plus
          td.py-2.pl-0
            .input-group.input-group-sm(v-for="round in [ player.rounds[roundCur] ]")
              .input-group-prepend
                button.btn.btn-outline-secondary(type="button", @click="round.result--")
                  span.fa.fa-minus
              input.form-control.text-center(type="number", v-model="round.result")
              .input-group-append
                button.btn.btn-outline-secondary(type="button", @click="round.result++")
                  span.fa.fa-plus
    .card-body.p-2(v-if="curTab == 'input'")
      button.btn.btn-sm.btn-outline-secondary.mr-1(type="button", :disabled="roundCur <= 0", @click="roundCur--") #[span.fa.fa-arrow-left] 上一輪
      button.btn.btn-sm.mr-1(type="button", :disabled="roundCur >= roundMax - 1", @click="roundCur++", :class="'btn-outline' + inputResultColor") #[span.fa.fa-arrow-right] 下一輪
      span.text-black-50.fs-dot8rem 點玩家名稱可以改名。
    .table-responsive(v-if="curTab == 'result' && !!roundMax")
      table.table.table-striped.table-borderless.table-sm.mb-0.text-center.text-nowrap.text-monospace#result-table
        thead
          tr
            th #
            th(v-for="player, playerIdx in players")
              span.badge.badge-primary {{ playersScore[playerIdx] }}
              br
              span {{ player.name }}
        tbody
          tr(v-for="i in roundMax", :key="i")
            th {{ i }}
            td(v-for="player in players")
              template(v-if="roundsEnable[i-1]", v-for="round in [_.get(player, ['rounds', i-1])]")
                span.round-score.pr-2.align-middle(v-for="score in [calculatePlayerRoundScore(round)]", :class="score > 0 ? 'text-success' : 'text-danger'") {{ score }}
    .alert.alert-danger.mb-0(v-if="!roundMax") 神機妙算的人數限制為 3 人到 6 人。
</template>

<style lang="sass" scoped>
.w-1px
  width: 1px
[v-cloak]
  display: none
.round-score.text-success::before
  content: '+'
.badge
  display: inline-block
  padding: .25em .4em
  font-size: 75%
  font-weight: 700
  line-height: 1
  text-align: center
  white-space: nowrap
  vertical-align: baseline
  border-radius: .25rem
  height: auto
  margin-right: 0
.badge-secondary
  color: #fff
  background-color: #6c757d
.badge-primary
  color: #fff
  background-color: #007bff
.badge-info 
  color: #fff
  background-color: #17a2b8
.badge-danger
  color: #fff
  background-color: #dc3545
#result-table
  letter-spacing: -1.5px
.fs-dot8rem
  font-size: .8rem
</style>

<script>
export default {
  data: () => ({
    roundCur: 0,
    curTab: 'setting',
    players: []
  }),
  mounted () {
    let players = localStorage.getItem('BoardGameWizardScoreBoard')
    if (players) this.$set(this, 'players', JSON.parse(players))
    this.$watch('players', newPlayers => {
      localStorage.setItem('BoardGameWizardScoreBoard', JSON.stringify(newPlayers))
    }, {deep: true})
  },
  computed: {
    roundMax () {
      if (!_.inRange(this.players.length, 3, 7)) return 0
      return 60 / this.players.length
    },
    predictsSum () {
      let sum = []
      for (let i=0; i<this.roundMax; i++) {
        sum[i] = _.sumBy(this.players, player => _.get(player, ['rounds', i, 'predict'], 0))
      }
      return sum
    },
    resultsSum () {
      let sum = []
      for (let i=0; i<this.roundMax; i++) {
        sum[i] = _.sumBy(this.players, player => _.get(player, ['rounds', i, 'result'], 0))
      }
      return sum
    },
    roundsEnable () {
      let ret = []
      for (let i=0; i<this.roundMax; i++) {
        ret[i] = (this.predictsSum[i] + this.resultsSum[i]) > 0
      }
      return ret
    },
    playersScore () {
      return _.map(this.players, this.playerScore)
    },
    inputResultColor () {
      return (this.resultsSum[this.roundCur] === this.roundCur + 1) ? '-success' : '-danger'
    },
    dealer () {
      return this.roundCur % this.players.length
    },
  },
  methods: {
    gameRestart () {
      if (!this.roundMax) return
      _.each(this.players, player => {
        this.$set(player, 'rounds', _.map(
          new Array(this.roundMax), 
          () => ({
            predict: 0,
            result: 0
          })
        ))
      })
      this.roundCur = 0
    },
    calculatePlayerRoundScore (round) {
      let predict = _.get(round, 'predict', 0)
      let result = _.get(round, 'result', 0)
      if (predict === result) return result * 10 + 20
      return Math.abs(result - predict) * -10
    },
    playerScore (player) {
      let sum = 0
      _.each(player.rounds, (round, i) => {
        if (this.resultsSum[i] <= 0) return
        sum += this.calculatePlayerRoundScore(round)
      })
      return sum
    },
    promptPromise (message, defaultValue) {
      return new Promise((resolve, reject) => {
        let ret = prompt(message, defaultValue)
        if (ret == null) return reject(new Error('user canceled.'))
        resolve(ret)
      })
    },
    confirmPromise (message) {
      return new Promise((resolve, reject) => {
        let ret = confirm(message)
        if (!ret) return reject(new Error('user canceled.'))
        resolve(ret)
      })
    },
    async playerAdd () {
      try {
        let playerName = await this.promptPromise('請輸入新玩家的暱稱', `${this.players.length + 1}P`)
        if (playerName == null) return
        this.players.push({ name: playerName })
        this.gameRestart()
      } catch (error) {
        console.log(error)
      }
    },
    async playerPop () {
      try {
        let player = _.last(this.players)
        await this.confirmPromise(`確定要刪除玩家「${player.name}」嗎？\n（修改玩家人數都會自動重新開始遊戲）`)
        this.players.pop()
        this.gameRestart()
      } catch (error) {
        console.log(error)
      }
    },
    async playerRename (player) {
      try {
        let playerName = await this.promptPromise(`請問要把玩家 ${this.players.indexOf(player) + 1} 的名字改成什麼？`, player.name)
        if (playerName == null) return
        this.$set(player, 'name', playerName)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
