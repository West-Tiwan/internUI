import React, { PureComponent } from 'react'
import styles from './CircleNumber.module.scss'
import {PieChart, Pie, Sector, Cell, ResponsiveContainer, Label} from 'recharts';
import whiteEllipse from '../../assets/white-ellipse.svg'
import blueEllipse from '../../assets/blue-ellipse.svg'
import purpleEllipse from '../../assets/purple-ellipse.svg'
import orangeEllipse from '../../assets/orange-ellipse.svg'
import greenEllipse from '../../assets/green-ellipse.svg'
import purpleEllipse2 from '../../assets/purple-ellipse-2.svg'
import yellowEllipse from '../../assets/yellow-ellipse.svg'
import darkBlue from '../../assets/dark-blue-ellipse.svg'



class Example extends PureComponent {
    render() {
        const { data, COLORS } = this.props;
        return (
            <PieChart width={60} height={60} onMouseEnter={this.onPieEnter} fill="none">
                <Pie
                    data={data}
                    cx={25}
                    cy={25}
                    innerRadius={18}
                    outerRadius={25}
                    fill="#8884d8"
                    stroke={"none"}
                    paddingAngle={1}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label value={data[0]?.value} position="center" style={{ fill: COLORS[0], fontSize: '14px' }}/>
                </Pie>
            </PieChart>
        );
    }
}

const CircleNumber = ({number, text}) => {
    switch (number){
        case 1:
            return (
                <div>
                    <Example data={[{value:4.8},{value:5.2}]} COLORS={['#0088FE','#F2F6Fc']}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <Example data={[{value:1.8},{value:8.2}]} COLORS={['#F7944C','#F2F6FC']}/>
                </div>
            )
        case 3:
            return (
                <div>
                    <Example data={[{value: 7.8}, {value: 2.2}]} COLORS={['#40C3FD', '#F2F6FC']}/>
                </div>
            )
        case 4:
            return (
                <div>
                    <Example data={[{value: 5.8}, {value: 4.2}]} COLORS={['#74C799', '#F2F6FC']}/>
                </div>
            )
        case 5:
            return (
                <div>
                    <Example data={[{value: 1.8}, {value: 8.2}]} COLORS={['#7B61FF', '#F2F6FC']}/>
                </div>
            )
        case 6:
            return (
                <div>
                    <Example data={[{value: 7.8}, {value: 2.2}]} COLORS={['#FDB239', '#F2F6FC']}/>
                </div>
            )
        case 7:
            return (
                <div>
                    <Example data={[{value: 5.8}, {value: 4.2}]} COLORS={['#6B4C92', '#F2F6FC']}/>
                </div>
            )
    }
}
export default CircleNumber
