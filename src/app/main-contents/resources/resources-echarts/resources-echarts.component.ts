import { Component, OnInit } from '@angular/core';
import map from 'lodash-es/map';

@Component({
  selector: 'app-resources-echarts',
  templateUrl: './resources-echarts.component.html',
  styleUrls: ['./resources-echarts.component.scss']
})
export class ResourcesEchartsComponent implements OnInit {
  public chartOption: Record<string, unknown> = null;

  ngOnInit(): void {
    const mockDataFromDB = [
      { month: 'JAN', evaporation: 2.0, precipitation: 2.6, average_temp: 2.0},
      { month: 'FEB', evaporation: 4.9, precipitation: 5.9, average_temp: 2.2},
      { month: 'MAR', evaporation: 7.0, precipitation: 9.0, average_temp: 2.3},
      { month: 'APR', evaporation: 23.2, precipitation: 26.4, average_temp: 4.5},
      { month: 'MAY', evaporation: 25.6, precipitation: 28.7, average_temp: 6.4},
      { month: 'JUN', evaporation: 76.7, precipitation: 70.7, average_temp: 10.2},
      { month: 'JUL', evaporation: 136.6, precipitation: 175.7, average_temp: 20.3},
      { month: 'AUG', evaporation: 162.2, precipitation: 182.6, average_temp: 23.4},
      { month: 'SEP', evaporation: 32.6, precipitation: 48.6, average_temp: 23.0},
      { month: 'OCT', evaporation: 20.0, precipitation: 18.8, average_temp: 16.5},
      { month: 'NOV', evaporation: 6.4, precipitation: 6.0, average_temp: 12.0},
      { month: 'DEC', evaporation: 3.3, precipitation: 2.3, average_temp: 6.2}
    ];
    let xAxisList: string[] = [];
    const legendList: string[] = ['Evaporation', 'Precipitation', 'Average Temperature'];
    const dataRecord = {
        evaporation: [],
        precipitation: [],
        average_temp: []
    };
    xAxisList = map(mockDataFromDB, 'month');
    dataRecord.evaporation = map(mockDataFromDB, 'evaporation');
    dataRecord.precipitation = map(mockDataFromDB, 'precipitation');
    dataRecord.average_temp = map(mockDataFromDB, 'average_temp');
    const dataSeriesList = [
      {
          name: 'Evaporation',
          type: 'bar',
          data: dataRecord.evaporation
      },
      {
          name: 'Precipitation',
          type: 'bar',
          data: dataRecord.precipitation
      },
      {
          name: 'Average Temperature',
          type: 'line',
          yAxisIndex: 1,
          data: dataRecord.average_temp
      }
    ];

    this.chartOption  = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
      },
      toolbox: {
          feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
          }
      },
      legend: {
          data: legendList
      },
      xAxis: [
          {
              type: 'category',
              data: xAxisList,
              axisPointer: {
                  type: 'shadow'
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: 'volumne',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                  formatter: '{value} ml'
              }
          },
          {
              type: 'value',
              name: 'temperature',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} °C'
              }
          }
      ],
      series: dataSeriesList
    };
  }

}
