<template lang="pug">
.container(v-cloak)
  h1.text-center.my-3 神機妙算記分板
  .card.mb-3
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item(v-for="tabName, tabKey in {setting: '設定', input: '記錄', scores: '得分', rule: '規則'}")
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
    .table-responsive(v-if="curTab == 'scores' && !!roundMax")
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
    .card-body.p-2(v-if="curTab == 'rule'")
      img.mb-3.d-block.mx-auto.img-fluid(src="/images/boardgame-wizard.jpg")
      p {{ players.length }} 人遊戲共有 {{ _.inRange(players.length, 3, 7) ? (60 / players.length) : 0 }} 局。 每局由一個人順時針輪流作為發牌玩家，第 1 局每人 1 張牌、第 2 局每人 2 張牌…依此類推。
      p 沒發完的牌要翻出最上面的牌作為王牌，王牌的花色即為該局的「王牌色」。 若王牌為 Z 則由發牌玩家決定本局王牌色，若王牌為 N 或是最後一局全部發完時則以「無王牌色」進行。
      p 每局開始時，由發牌玩家開始喊本局預測會吃幾墩，其他人順時針喊出預測會吃幾墩，需要用本記分板紀錄所有人所預測的墩數。
      p 預測完後就進入出牌階段，每次由本局上一次吃墩的玩家先出一張牌，若是本局第一次出牌則由發牌者先出一張牌。
      p 其他玩家必須順時針依序打出一張與先發者同花色的牌（Z 和 N 可作為任何花色），如果沒有同花色的牌，才能夠打出王牌色或其他花色的牌。 若先發者打出無花色的牌（Z 或 N），則由下一家出牌決定本次的花色。 若下一家又打出無花色的牌，則再由下一家出牌決定。
      p 所有玩家都出一張牌以後，牌最大的玩家吃到這一墩（把這次所有人出的一張牌放於自己面前）。 當本局的手牌全部打完，本局結束。
      p
        | 每次所有玩家打出一張牌以後，透過以下的方式比較大小：
        ol
          li 最大的是 Z，若有多張 Z 則先出的人較大
          li 第二大是王牌色，1 最小 13 最大
          li 第三大是先發者的花色，1 最小 13 最大
          li 第四大是非王牌色也非先發者的花色
          li 最小的是 N，若有多張 N 則先出的人較大
      p 每局結束時，需要將每個人所吃到的墩數紀錄於本記分板。
      p
        | 遊戲計分的方式為：
        ul
          li 若該局玩家預測正確，則分數為：墩數乘以 10 再加上額外的 20 分。
          li 若該局玩家預測錯誤，則分數為：多吃或少吃的墩數乘以 -10。（沒有額外的 20 分）
      p.mb-0 玩家每一局所獲得的分數加總即為總分，總分最多的人獲勝。
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
