import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const COLORS = [
  '#F44336',
  '#673AB7',
  '#2196F3',
  '#E91E63',
  '#9C27B0',
  '#3F51B5',
  '#009688',
  '#00BCD4',
  '#FFEB3B',
  '#795548'
];

const random = (min, max) => {
  return Math.floor(Math.random() * max + min);
}

const getData = () => {
  return [{name: 'Group A', value: random(1, 400)}, {name: 'Group B', value: random(1, 300)},
                      {name: 'Group C', value: random(1, 300)}, {name: 'Group D', value: random(1, 200)}];
}

class App extends Component {
  render() {

    const first = getData();
    const second = getData();
    const third = getData();

    const data02 = [{name: 'A1', value: 100},
                        {name: 'A2', value: 300},
                       {name: 'B1', value: 100},
                       {name: 'B2', value: 80},
                       {name: 'B3', value: 40},
                       {name: 'B4', value: 30},
                       {name: 'B5', value: 50},
                      {name: 'C1', value: 100},
                      {name: 'C2', value: 200},
                       {name: 'D1', value: 150},
                       {name: 'D2', value: 50}]

    return (
      <div className="App">
        <div style={{ display: "flex", width: "50%" }}>
          <div style={{ flex: 1}}>
            <ResponsiveContainer height={250}>
              <PieChart>
                {/*<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />*/}
                <Pie data={first} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={50}  label>
                 {first.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: 1}}>
            <ResponsiveContainer height={250}>
              <PieChart>
                {/*<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />*/}
                <Pie data={second} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={50}  label>
                 {second.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: 1}}>
            <ResponsiveContainer height={250}>
              <PieChart>
                {/*<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />*/}
                <Pie data={third} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={50}  label>
                 {third.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/*<div>
            <PieChart width={730} height={250}>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </div>
          <div>
            <PieChart width={730} height={250}>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default App;
