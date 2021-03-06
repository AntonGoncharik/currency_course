import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import Period from "../Period/Period";
import s from './ChartCurrency.module.css';
import {connect} from "react-redux";

const options = {
    title: {
        display: true,
        text: 'Currency course',
        fontFamily: 'a_LCDNova',
        fontColor: 'rgb(255, 255, 255, 1)',
        fontSize: 26
    },
    legend: {
        labels: {
            fontFamily: 'a_LCDNova',
            fontColor: 'rgb(255, 255, 255, 1)',
            fontSize: 15
        }
    },
    animation: {
        duration: 3000
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgb(255, 255, 255, 0.3)'
            },
            ticks: {
                fontColor: 'rgb(255, 255, 255, 1)'
            }
        }],
        yAxes: [{
            gridLines: {
                color: 'rgb(255, 255, 255, 0.3)'
            },
            ticks: {
                fontColor: 'rgb(255, 255, 255, 1)'
            }
        }]
    }
};

const chartData = (currencyCourseToPeriod) => {
    const dates = currencyCourseToPeriod.map(item => item.date);
    const courses = currencyCourseToPeriod.map(item => item.course);

    return {
        labels: dates,
        datasets: [
            {
                label: 'Currency course',
                borderColor: 'rgb(255, 255, 255, 1)',
                backgroundColor: 'rgb(255, 255, 255, 0.1)',
                data: courses
            }
        ]
    }
};

const ChartCurrencyCourse = (props) => {
    return (
        <div>
            <LineChart data={chartData(props.currencyCourseToPeriod)}
                       options={options}
                       width="300"
                       height="100"/>
            <div className={s.period}>
                <Period/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        currencyCourseToPeriod: state.currenciesCourses.currencyCourseToPeriod
    }
};

export default connect(mapStateToProps,
    null
)(ChartCurrencyCourse);