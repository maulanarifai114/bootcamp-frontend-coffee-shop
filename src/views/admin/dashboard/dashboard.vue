<template>
    <div class="container">
        <h1>See how your store progress so far</h1>
        <div class="top">
            <div class="filter-logo" type=button>
                <img src="../../../assets/img/date settings.png" alt="">
                <p>Filter</p>
            </div>
            <p>15 April - 21 April 2020</p>
            <div class="left" type= button> &laquo; </div>
            <div class="right" type= button> &raquo; </div>
        </div>
        <div class="content">
            <div class="leftside">
                <div class="graphic">
                    <h2>Monthly Report</h2>
                    <p>15 - 20 April</p>
                    <div ref="chart" class="chart"></div>
                </div>
                <button class="button">Download Report</button>
            </div>
            <div class="rightside">
                <div class="beststaff">
                    <div class="best-profile">
                        <div class="best-photo">
                            <img src="../../../assets/img/UI Element/Light/Donut/image 51.png" alt="">
                        </div>
                        <div class="best-name">
                            <p class="name">Cheryn Laurent</p>
                            <p class="description">Keep up the good work and spread love!</p>
                        </div>
                    </div>
                    <p class="title">Best Staff of the Month</p>
                    <div class="staff-perf">
                        <img src="../.././../assets/img/UI Element/Light/Donut/UI elements/Donut/Donut/size 01-color-01.png" alt="">
                    </div>
                    <p class="info">Achieved 3.5M of total 5M <br> 478 Customer </p>
                </div>
                <div class="goals">
                    <p class="goal-title">Goals</p>
                    <p class="goal-desc">Your goals is still on 80%. Keep up the good work!</p>
                    <div class="goal-graph">
                        <img src="../.././../assets/img/UI Element/Light/Donut/UI elements/Donut/Donut/size 01-color-01.png" alt="">
                    </div>
                </div>
                <button class="button">Share Report</button>
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts/dist/apexcharts.js'

export default {
	title: 'Dashboard',
	name: 'Dashboard',
	mounted () {
		var options = {
			chart: {
				height: 420,
				type: 'bar'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			series: [
				{
					name: 'income',
					data: [3, 5, 4.5, 4, 4.5, 4],
					color: '#FFBA33'
				},
				{
					name: 'outcome',
					data: [-1, -1.5, -2, -1, -1.5, -2],
					color: '#6A4029'
				}
			],

			xaxis: {
				type: 'varchar',
				categories: ['15', '16', '17', '18', '19', '20']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return 'IDR ' + value + ' M'
					}
				}
			}
		}

		if (this.$refs.chart) {
			var chart = new ApexCharts(this.$refs.chart, options)
			chart.render()
		}
	}
}
</script>

<style lang="scss" scoped>
.goal-title {
    text-align: center;
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: 700;
    color: #000000;
}
.goal-desc {
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 400;
    color: #7C828A;
}
.staff-perf {
    width: 100%;
    text-align: center;
}
.goal-graph {
    width: 100%;
    text-align: center;
}
.title {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #000000;
}
.info {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #7C828A;
}
.name {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000000;
}
.description {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #000000;
}
.best-photo {
    height: 79px;
    width: 85px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 3%;
}
.best-photo img {
    height: 100%;
}
.best-profile{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid  #7C828A;
}
.button {
    width: 100%;
    height: 97px;
    border-radius: 20px;
    background-color: #6A4029;
    color: #FFFFFF;
    font-family: Nunito Sans;
    font-size: 30px;
    font-weight: 700;
    border: none;
    outline: none;
    box-shadow: 5px 10px 18px #888888;
}
.left, .right {
    font-size: 60px;
    margin-right: 5%;
    margin-bottom: 3%;
}
.top, .content {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.filter-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2%;
}
h1 {
    font-family: Rubik;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #6A4029;
    margin-bottom: 3%;
}
h2 {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 700;
    text-align: left;
    color: #000000;
}
p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #7C828A;
    margin-right: 5%;
}
.graphic {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-bottom: 12%;
    box-shadow: 5px 10px 18px #888888;
}
.rightside {
    width: 40%;
    margin-left: 5%;
}
.leftside {
    width: 60%;
}
.beststaff, .goals {
    height: 317px;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 5%;
    box-shadow: 5px 10px 18px #888888;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
}
@media screen and (max-width: 767px) {
    .content {
        flex-direction: column;
        width: 100%;
    }
    .leftside {
        width: 100%;
    }
    .rightside {
        width: 100%;
        margin: 0;
        margin-top: 10%;
    }
}
</style>
