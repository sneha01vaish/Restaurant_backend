import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [0, 10000, 20000, 30000, 20000, 23900, 30490,25000,30000];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',

];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={1000}
      height={300}
      series={[
        // { data: pData, label: 'pv' },
        { data: uData, label: 'Monthly Revenue-2024' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}